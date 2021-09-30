const { Octokit } = require("@octokit/core");
const fs = require("fs");

/*
 User
    Full Name : name
    Image Url (from github/twitter or any other socials): avatarUrl
    Github Username (optional) : github
    Twitter Username (optional) : twitter
    Blog Url (optional) : blogUrl
*/
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const getNewContributors = async (existing) => {
  // get all contributors
  let res = await octokit.request('GET /repos/{owner}/{repo}/contributors', {
    owner: 'FrancescoXX',
    repo: '4c-site'
  })

  return res.data.filter(user => !existing.includes(user.login) && user.type !== "Bot").map(async user => {
    let d = await octokit.request("GET /users/{username}", { username: user.login })
    const newUser = {
      name: d.data.name,
      avatarUrl: d.data.avatar_url,
      github: d.data.login,
      twitter: d.data.twitter_username,
      blogUrl: d.data.blog
    };
    return newUser;
  })
}

fs.readFile("./content/contributors.json", "utf8", async (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  try {
    let contributors = JSON.parse(jsonString);
    // get github usernames of existing users
    let existing_users = contributors.github.map(u => u.github)


    getNewContributors(existing_users).then(d => {
      Promise.all(d).then(users => {
        users.forEach(u => contributors.github.push(u));
        console.log(users);
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
