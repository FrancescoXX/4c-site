const { Octokit } = require("@octokit/core");
const fs = require("fs");
const parse = require('csv-parse');
const axios = require("axios");

const headerAlias = {
  'Timestamp': "createdAt",
  'Full Name': "name",
  'Hosted Image URL': "avatarUrl",
  'Github Username': "github",
  'Twitter Username': "twitter",
  'Blog URL': "blogUrl",
  'Youtube Account Link': "youtube",
}

// check if any fields that should be unique is seen before
const uniqueSocials = (userObj, existing) => {
  for (ex of existing) {
    if ((userObj?.github && ex?.github?.toLowerCase() === userObj?.github?.toLowerCase()) || (userObj?.twitter && ex?.twitter?.toLowerCase() === userObj?.twitter?.toLowerCase()) || (userObj?.youtube && ex?.youtube?.toLowerCase() === userObj?.youtube?.toLowerCase()) || (userObj?.blogUrl && ex?.blogUrl?.toLowerCase() === userObj?.blogUrl?.toLowerCase())) {
      return false;
    }
  }
  return true;
}

/*
 User
    Full Name : name
    Image Url (from github/twitter or any other socials): avatarUrl
    Github Username (optional) : github
    Twitter Username (optional) : twitter
    Blog Url (optional) : blogUrl
*/

const fetchNewGithubContributors = async (existing) => {
  // get all contributors
  let res = await octokit.request('GET /repos/{owner}/{repo}/contributors', {
    owner: 'FrancescoXX',
    repo: '4c-site'
  })

  return res.data.filter(user => !existing.includes(user.login) && user.type !== "Bot").map(async user => {
    let d = await octokit.request("GET /users/{username}", { username: user.login })
    const newUser = {
      name: d.data.name ?? d.data.login,
      avatarUrl: d.data.avatar_url,
      github: d.data.login,
      twitter: d.data.twitter_username,
      blogUrl: d.data.blog
    };
    return newUser;
  })
}

const getGithubContributors = () => {
  fs.readFile("./content/contributors.json", "utf8", async (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    try {
      let contributors = JSON.parse(jsonString);
      // get github usernames of existing users
      let existing_users = contributors.profiles.map(u => u?.github).filter(id => id)


      fetchNewGithubContributors(existing_users).then(d => {
        Promise.all(d).then(users => {
          users.forEach(u => contributors.profiles.push(u));
          fs.writeFile('./content/contributors.json', JSON.stringify(contributors), err => {
            if (err) {
              console.log('Error writing file', err)
            } else {
              console.log('Successfully updated contributors.')
            }
          })
        })
      })
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
}

const getAllContributors = () => {
  fs.readFile("./content/contributors.json", "utf8", async (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }

    try {
      // parse existing contributors from JSON
      let contributors = JSON.parse(jsonString);
      // get github usernames of existing users
      let existing_users = contributors.profiles;
      // get contributors from the sheet as csv
      const res = await axios.get("https://docs.google.com/spreadsheets/d/1W93U4inesqfAQKv_SIqmTdJuCh9HEq9OpoxPiv2skcQ/export?format=csv&gid=909227343");
      // coming in as csv
      const all = res.data;
      // parse the csv to array [[headers], [values1], [values2]]
      parse(all, {
        comment: '#'
      }, function (err, output) {
        if (err) {
          console.log("Parsing Fetched CSV Failed:", err);
          return;
        }
        console.log(output)
        // get headers
        const headers = output[0];
        // create an array of new users from the fetched contributors
        const newUsers = output.slice(1).reduce((acc, cur) => {
          let userObj = {};
          headers.forEach((key, idx) => { userObj[headerAlias[key]] = cur[idx] })
          // if user already exists don't add
          console.log(uniqueSocials(userObj, existing_users))
          if (uniqueSocials(userObj, existing_users)) { acc.push(userObj); }
          return acc;
        }, [])
        // if there are no new users
        if (newUsers.length == 0) return;
        // add new users to contributors json
        newUsers.forEach(u => contributors.profiles.push(u));
        // write updated json to file
        fs.writeFile('./content/contributors.json', JSON.stringify(contributors), err => {
          if (err) {
            console.log('Error writing file', err)
          } else {
            console.log('Successfully updated contributors.')
          }
        })
      })
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  })
}

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});
getGithubContributors();
getAllContributors();
