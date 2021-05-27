
const fs = require('fs');
module.exports = {
    name: 'prefix',
    aliases: [],
    description: "cambia el comando del bot",
    execute(message,args,cmd,client,Discord){
      if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("No tienes permisos para administrar el server")
      if(!args[0] || args[0 == "help"]) return message.reply("Utilizacion: prefix <prefijo deseado>")
      
      let prefixes = JSON.parse(fs.readFileSync("./prefixes.json",'utf8'));

      prefixes[message.guild.id] = {
        prefixes:args[0]
      };
      fs.writeFile("./prefixes.json",JSON.stringify(prefixes), (err) =>{
        console.log(err);
      } );

      let sEmbed = new Discord.MessageEmbed()
      .setColor("#FF9900")
      .setTitle("Prefijo actualizado!")
      .setDescription(`ahora es ${args[0]}`);

      message.channel.send(sEmbed);
      
         
    }
}