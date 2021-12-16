require('dotenv').config();
const { Client, Intents } = require('discord.js');

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

const client = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
]});

const prefix = '!';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
    if (message.content.startsWith(prefix)) {
        message.reply('bom')
    }
    console.log(message.content);
});

client.login(DISCORD_TOKEN);
