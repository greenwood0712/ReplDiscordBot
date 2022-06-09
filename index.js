const keep_alive = require('./keep_alive.js')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES] });
const token = process.env['DISCORD_BOT_SECRET'];

client.on('ready', () => {
  console.log("I am in ");
  console.log(client.user.username);
})

client.on('message', msg => {
  if (msg.author.id != client.user.id) {
    msg.channel.send(msg.content.split('').reverse().join(''));
  }
})

client.login(token)