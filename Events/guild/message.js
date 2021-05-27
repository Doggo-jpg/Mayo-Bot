require('dotenv').config
const profileModel = require("..//../models/profileSchema");
const fs = require('fs');

module.exports = async(Discord, client, message) =>{
  let prefix = '-';


    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json","utf8"))
    if(prefixes[message.guild.id]){
      prefix = prefixes[message.guild.id]
      prefix = prefix.prefixes
    }
    console.log(prefix)
    client.user.setPresence({
        activity: {
            name: `${prefix}help`,
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
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    
    // if the command exists executes command
    try {
        if(command){
            command.execute(message,args,cmd,client,Discord, profileData);
            
            }
    } catch (error) {
        console.log(error);
    }
   
   
}