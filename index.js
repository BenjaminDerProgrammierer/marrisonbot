require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
//events
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));
for (let file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}
//commands
client.commands = new Discord.Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}
//Chats u. Ä.
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	console.log(
		`${interaction.member.displayName} sent a command in #${interaction.channel.name}: ${interaction.commandName}`
	);
	const command = client.commands.get(interaction.commandName);


	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}

});
	
client.login(process.env.BOT_TOKEN);
