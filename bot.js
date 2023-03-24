const Discord = require('discord.js');
const { token } = require('./config.json');

const client = new Discord.Client({ 
	intents: [
		Discord.Intents.FLAGS.GUILDS, 
		Discord.Intents.FLAGS.GUILD_MESSAGES
	] 
});

client.on('ready', () => {
  	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
	console.log(interaction)
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!');
	}
});

client.on('messageCreate', (message) => {
	console.log(message.content);
});

client.login(token);