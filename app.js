const Discord = require("discord.js");
require('dotenv').config();
const mongoose = require("mongoose");
const client = new Discord.Client();


const fs = require('fs');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();
['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client,Discord);
});

mongoose.connect(process.env.MONGODB_SRV,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    userFindAndModify:false
}).then(()=>{
    console.log("connected to the database")
}).catch((err) =>{
    console.log(err);
});


//login the bot using token
client.login(process.env.DISCORD_TOKEN);