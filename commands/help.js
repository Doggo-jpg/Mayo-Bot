const fs = require('fs');
const { stringify } = require('querystring');

module.exports = {
    name: 'help',
    aliases:['h'],
    description: "ayuda a los ineptos a entender los comandos de este bot increiblemente sofisticado",
    execute(message,args,cmd,client,Discord){

        const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
        let wrt = "";
        
        for(const file of command_files){
            const command = require(`../commands/${file}`);
            if(command.name){
                wrt += "-"+command.name +": "+ command.description + "\n";
              
                
               
            } else{
                continue;
            }
          
        }
        message.channel.send(wrt);
        
    }
}