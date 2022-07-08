//import packages
require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });



//The real bot code
client.once('ready', c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('messageCreate', msg => {
	console.log(`${JSON.stringify(msg.member.displayName)} sent a message in #${msg.channel.name}.`);
});

//connect this code to our discord_bot
client.login(process.env.BOT_TOKEN)