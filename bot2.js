const {Client, Intents} = require('discord.js');
const { token } = require('./config.json');

const client = new Client({intents: [32767]});

//const prefix = '-';

client.once('ready', (message) => {
  console.log('Ready!');
  console.log(message.listenerCount('message'));
});

client.on('message', (message) => {
  console.log('message');
  //message.channel.send('Ponngg');
});

client.on('connection', (message) => {
  console.log('connection');
  //message.channel.send('Ponngg');
});


client.on('error', (message) => {
  console.log('error');
  //message.channel.send('Ponngg');
});

//client.on()


client.login(token);