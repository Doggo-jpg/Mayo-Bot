const fs = require('fs');
const { stringify } = require('querystring');

module.exports = {
    name: 'help',
    aliases:['h'],
    otherCommands:[],
    description: "ayuda a los ineptos a entender los comandos de este bot increiblemente sofisticado",
    parameters:[],
    execute(message,args,cmd,client,Discord,prefix,profileData){

        const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
        let wrt = "";
        let hembed = new Discord.MessageEmbed();
        hembed.setTitle('Ayuda');
        hembed.setColor('RANDOM');
        hembed.setDescription('Estos son todos los comandos de MayoBot');
        
        for(const file of command_files){
            const command = require(`../commands/${file}`);
            if(command.name){
                wrt += prefix+command.name +": "+ command.description + "\n";
                let title =prefix+command.name
                if(command.aliases != null ){
                 title +=`, ${command.aliases}` 
                }
                
                hembed.addField(`${prefix}${command.name} ${command.parameters}`,command.description)
                
                
              
                
               
            } else{
                continue;
            }
          
        }
        message.channel.send(hembed);
        
    }
}