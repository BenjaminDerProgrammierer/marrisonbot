module.exports = {
  name: "interactionCreate",
  execute(async interaction) {
    console.log(
      `${interaction.member.displayName} sent a message in #${interaction.channel.name}: ${interaction.message}`
    );
    if (!interaction.isCommand()) return;
    const commandName = interaction;

	  if (commandName === 'ping') {
	  	await interaction.reply('Pong!');
	  } else if (commandName === 'server') {
	  	await interaction.reply('Server info.');
	  } else if (commandName === 'user') {
	  	await interaction.reply('User info.');
	  }
  },
};
