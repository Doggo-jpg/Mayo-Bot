const Discord = require("discord.js");
require('dotenv').config();
const client = new Discord.Client();


const fs = require('fs');
const { stringify } = require("querystring");


client.commands = new Discord.Collection();
client.events = new Discord.Collection();
['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client,Discord);
});




//login the bot using token
client.login(process.env.DISCORD_TOKEN);