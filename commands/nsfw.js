const NSFW = require("discord-nsfw");
const fetch = require("node-fetch");
const nsfw = new NSFW();
module.exports = {
    tag:"nsfw",
    name: 'nsfw',
    aliases: [],
    otherCommands:['hass','hmidriff','pgif','4k','hentai','holo','neko','hkitsune','kemonomimi','anal','hanal','gonewild','kanna','ass','pussy','thigh','hthigh','gah','coffee','food','paizuri','tentacle','boobs','hboobs','yaoi'],
    description: `manda una imagen nsfw random.\npara comandos mas espesificos uwu:\n`+"['`hass`','`hmidriff`','`pgif`','`4k`','`hentai`','`holo`','`neko`','`hkitsune`','`kemonomimi`','`anal`','`hanal`','`gonewild`','`kanna`','`ass`','`pussy`','`thigh`','`hthigh`','`gah`','`coffee`','`food`','`paizuri`','`tentacle`','`boobs`','`hboobs`','`yaoi`']",
    parameters:[],
    execute(message,args,cmd,client,Discord,prefix,profileData){
    
      if(cmd=== 'nsfw'){
        const indx = Math.floor(Math.random() * 25); 
        imgtype = this.otherCommands[indx]
      }else{
        
      imgtype = cmd
      }

      fetch(`https://nekobot.xyz/api/image?type=${imgtype}`,{
        headers: {
          'Authorization':'015445535454455354D6',
          'Content-Type':'application/json'
          }
      }).then(response => response.json())
      .then(data => {
        const embed = new Discord.MessageEmbed()
          .setTitle("NSFW")
          .setColor("GREEN")
          .setImage(data.message);
      message.channel.send(embed);
      }).catch(error => {
        console.log('err '+error)
      })
     
      
      
         
    }
}

const getNSFW = async() =>{
  return await nsfw.anal();
}
