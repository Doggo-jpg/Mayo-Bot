const fs = require('fs');
const { stringify } = require('querystring');

module.exports = {
    tag:"info",
    name: 'help',
    aliases:['h'],
    otherCommands:[],
    description: "ayuda a los ineptos a entender los comandos de este bot increiblemente sofisticado",
    parameters:[],
    execute(message,args,cmd,client,Discord,prefix,profileData){
         let hembed = new Discord.MessageEmbed();
        const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
        let command;

        if(args.length>0){
          console.log(command_files)
          try{
            command = require(`../commands/${args[0]}`);
            console.log(command)
          }catch(err){
            console.log("AASSSSSSSSSSSSSSSSSSSSSSSSSS:"+err)
          }

          if(command==null) return message.reply("ese no es un comando de mayobot o no tiene ayuda intenta con otro comando\nhelp <comando>")
          let title =command.name+" ||";

          if(command.aliases.length>0){
            for(let i=0;i<command.aliases.length;i++){ 
            title +=command.aliases+" ";
            }
          } 
          if(command.parameters.length>0){
            
            title += command.parameters;
          }
          hembed.setTitle(title);
          hembed.setColor('RANDOM');
          hembed.setDescription(command.description);

        }else{

          hembed.setTitle('Ayuda');
          hembed.setColor('RANDOM');
          hembed.setDescription('Estos son todos los comandos de MayoBot');
          let commandArray =[]
          for(const file of command_files){
              const command = require(`../commands/${file}`);
              commandArray.push(command)
              
            
          }
          let tagArray = []
          let count =0
          let tagCount = 0;

          while(count<commandArray.length){
            //console.log(count+":tagcount "+tagCount)

            let tag ="";
            let comandsleft = commandArray.length 
            let com ="";

              if(commandArray[tagCount]){ 
                tag = commandArray[tagCount].tag;
                for(let i = 0;i<comandsleft; i++){
                let theTag =commandArray[i]

                if( theTag!=null){

                  if(commandArray[i].tag == tag){
                    //console.log(commandArray[i].name+" is "+tag)
                    com +="`"+commandArray[i].name+"` "

                    if(commandArray[i].otherCommands.length > 0){
                      for(let j =0;j< commandArray[i].otherCommands.length;j++){
                        com +=", `"+commandArray[i].otherCommands[j]+"`"
                      }
                    
                    }  
                    
                    //console.log("deleted: "+commandArray[i].name)
                    delete commandArray[i]
                    
                    count++;
                    i--;
                    
                  }
                }
              }
            }
            tagCount++;

            if(tag.length>0 && com.length>0){
              hembed.addField(tag,com)
            }

            
          }

        }
        

        message.channel.send(hembed);
        
    }
}