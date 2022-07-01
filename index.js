//import packages
require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS] });



//The real bot code
client.on("ready", () => {
    console.log("Bot is ready")
})

client.on("message", msg => {
    if (msg.content === "hey") {
        msg.reply("hi there")
    } else if (msg.content === "u good bro") {
        msg.channel.send("nah")
    }
})

//connect this code to our discord_bot
client.login(process.env.BOT_TOKEN)