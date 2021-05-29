
const fs = require('fs');

module.exports = {
    name: 'rr',
    aliases: ['rrtitle'],
    otherCommands:[],
    description: "[WIP] agrega un role mediante una reaccion",
    parameters:[],
    async execute(message,args,cmd,client,Discord,prefix,profileData){
      const channelID = message.mentions.channels.first();
      //if(!channelID) return message.reply("Necesita espesificar un canal de texto")
      let reacRoles = JSON.parse(fs.readFileSync("./reactionRoles.json","utf8"));
      let rrembed =  new Discord.MessageEmbed()
      let msgID;
      let chanID
      let rrID = 0;
      console.log(message.content);
      let rrparam  = message.content.split("|")

      if(cmd === "rrtitle" && rrparam.length >2){
        chanID = reacRoles[message.member.id].messageID.channelID
        msgID = rrparam[1]

        console.log(reacRoles[message.member.id])
        rrembed.setTitle(rrparam[2])
        rrembed.setTitle(rrparam[2])
        rrembed.setDescription(rrparam[3])
        rrembed.addField(rrparam[4],rrparam[5])
        
        console.log(msgID)

        let msgaa  = message.guild.channels.cache.get(chanID).fetchMessage(msgID).edit(rrembed);

        fs.writeFile("./reactionRoles.json",JSON.stringify(reacRoles), (err) =>{
        console.log(err);
        } );
        console.log(reacRoles);

      }

      if(rrparam.length < 5) return message.reply("rr | <canal> | <Title> | <Descripcion> | rol |reaccion")
        
      console.log(rrparam)
      let schan = ''
      chanID = rrparam[1]
      chanID = chanID.substring(2,20)
      
      console.log(chanID);
      rrembed.setTitle(rrparam[2])
      rrembed.setDescription(rrparam[3])
      rrembed.addField(rrparam[4],rrparam[5])
      msgID = await message.guild.channels.cache.get(chanID).send(rrembed);
      
      if(reacRoles[message.member.id]){
        rrID = reacRoles[message.member.id].length

      }else{
        reacRoles[message.member.id]={}
      }



      
     console.log(rrparam[5])
      await msgID.react(rrparam[5])
      let newreactRole = {
        id:rrID,
        embed:rrembed,
        messageID:msgID,
        reactionRols:[{
          reaction:rrparam[5],
          role:rrparam[4]
        }]
      }

      reacRoles[message.member.id]= {
        id:rrID,
        embed:rrembed,
        messageID:msgID,
        reactionRols:[{
          reaction:rrparam[5],
          role:rrparam[4]
        }]
      }


      fs.writeFile("./reactionRoles.json",JSON.stringify(reacRoles), (err) =>{
        console.log(err);
      } );
      console.log(reacRoles);

     
    }
}