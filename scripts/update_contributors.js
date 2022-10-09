const { Octokit } = require("@octokit/core");
const fs = require("fs");
const parse = require('csv-parse/lib/sync');
const axios = require("axios");

// maps the column names in sheet to the key names
const headerAlias = {
    'Timestamp': "createdAt",
    'Full Name': "name",
    'Hosted Image URL': "avatarUrl",
    'Github Username': "github",
    'Twitter Username': "twitter",
    'Blog URL': "blogUrl",
    'Youtube Account Link': "youtube",
}

/*
 User
    Full Name : name
    Image Url (from github/twitter or any other socials): avatarUrl
    Github Username (optional) : github
    Twitter Username (optional) : twitter
    Blog Url (optional) : blogUrl
*/

const fetchNewGithubContributors = async() => {
    // get all contributors
    let res = await octokit.request('GET /repos/{owner}/{repo}/contributors', {
        owner: 'FrancescoXX',
        repo: '4c-site'
    })

    return res.data.filter(user => user.type !== "Bot").map(async user => {
        let d = await octokit.request("GET /users/{username}", { username: user.login })
        const newUser = {
            name: d.data.name ? ? d.data.login,
            avatarUrl: d.data.avatar_url,
            github: d.data.login,
            twitter: d.data.twitter_username,
            blogUrl: d.data.blog,
            contributions: user.contributions
        };
        return newUser;
    })
}

const getAllContributors = async() => {
    let users = [];

    // get contributors from the sheet as csv
    const res = await axios.get("https://docs.google.com/spreadsheets/d/1W93U4inesqfAQKv_SIqmTdJuCh9HEq9OpoxPiv2skcQ/export?format=csv&gid=909227343");
    // coming in as csv
    const all = res.data;
    // parse the csv to array [[headers], [values1], [values2]]
    let output = parse(all, {
            comment: '#',
            skip_empty_lines: true
        })
        // get headers
    const headers = output[0];
    // create an array of new users from the fetched contributors
    const newUsers = output.slice(1).filter(u => (u.name || u.twitter || u.github) && u.avatarUrl).reduce((acc, cur) => {
            let userObj = {};
            headers.forEach((key, idx) => { userObj[headerAlias[key]] = cur[idx] })
            acc.push(userObj);
            return acc;
        }, [])
        // if there are no new users
    if (newUsers.length == 0) return [];
    // add new users to contributors json
    newUsers.forEach(u => users.push(u));
    return users;
}

const addContributorsTOJSON = async() => {
    // 🤯
    contributors.profiles = [...(await Promise.all((await fetchNewGithubContributors()))), ...(await getAllContributors())]
        // update json
    fs.writeFile('./content/contributors.json', JSON.stringify(contributors), err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully updated profile data.')
            console.log(`Profiles: ${contributors.profiles.length}`)
        }
    })
}


// main
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});

let contributors = {
    profiles: []
}

addContributorsTOJSON()