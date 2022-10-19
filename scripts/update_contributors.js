const { Client, Intents } = require("discord.js");
const fs = require("fs");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS],
});

const fetchActiveMembers = async () => {
  return client.guilds.fetch(process.env.GUILD_ID).then(async (guild) => {
    return (await guild.members.fetch())
      .filter((member) =>
        member.roles.cache.some(
          (role) => role.id === process.env.ACTIVE_ROLE_ID
        )
      )
      .map((member) => {
        return {
          name: member.displayName,
          avatarUrl: member.displayAvatarURL(),
        };
      });
  });
};

const addActiveMemberstoJSON = async () => {
  activeMembers.profiles = await fetchActiveMembers();
  fs.writeFile(
    "./content/contributors.json",
    JSON.stringify(activeMembers),
    (err) => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("Successfully updated profile data.");
        console.log(`Profiles: ${activeMembers.profiles.length}`);
      }
    }
  );
};
let activeMembers = {
  profiles: [],
};
client.on("ready", async () => {
  await addActiveMemberstoJSON();
  client.destroy();
});
client.login(process.env.DISCORD_BOT_TOKEN);
