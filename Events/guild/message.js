require('dotenv').config
const profileModel = require("..//../models/profileSchema");
const fs = require('fs');

module.exports = async(Discord, client, message) =>{
  let prefix = '-';


    let config = JSON.parse(fs.readFileSync("./config.json","utf8"))
    if(config[message.guild.id]){
      prefix = config[message.guild.id].prefixes
    }
    client.user.setPresence({
        activity: {
            name: `-help`,
        }
    })


    let profileData;
    try{
        profileData = await profileModel.findOne({userID: message.author.id});
        if(!profileData){
            let profile = await profileModel.create({
                userID: message.author.id,
                serverID: message.guild.id,
                coins:1000,
                bank:0
            });
            profile.save();
        }
    }catch(error){
        console.log(error);
    }

    

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd))|| client.commands.find(a => a.otherCommands && a.otherCommands.includes(cmd));
    
    // if the command exists executes command
    try {
        if(command){
            command.execute(message,args,cmd,client,Discord,prefix,profileData);
            
            }
    } catch (error) {
        console.log(error);
    }
   
   
}