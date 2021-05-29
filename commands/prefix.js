
const fs = require('fs');
module.exports = {
    tag:"config",
    name: 'prefix',
    aliases: [],
    otherCommands:[],
    description: "cambia el comando del bot",
    parameters:['<prefijo deseado>'],
    execute(message,args,cmd,client,Discord,prefix,profileData){
      if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("No tienes permisos para administrar el server")
      if(!args[0] || args[0 == "help"]) return message.reply("Utilizacion: prefix <prefijo deseado>")
      
      let config = JSON.parse(fs.readFileSync("./config.json",'utf8'));

      config[message.guild.id] = {
        prefixes:args[0]
      };
      fs.writeFile("./config.json",JSON.stringify(config), (err) =>{
        console.log(err);
      } );

      let sEmbed = new Discord.MessageEmbed()
      .setColor("#FF9900")
      .setTitle("Prefijo actualizado!")
      .setDescription(`ahora es ${args[0]}`);

      message.channel.send(sEmbed);
      
         
    }
}