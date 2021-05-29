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
          hembed.setTitle(command.name);
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
              let tag = command.tag
              if(command.name){

                  let com ="`"+command.name+"`"
                  
                  for(let i =0;i<command.otherCommands.length;i++){
                    com +=", `"+command.otherCommands[i]+"`"
                  }
                  console.log(tag+" "+com)
                  //hembed.addField(tag,com)
              } else{
                  continue;
              }
            
          }
          let elimtags = commandArray
          let tagArray = []
          let count =0
          while(count<elimtags.length){
            let tag = elimtags[count].tag;
            let comandsleft = elimtags.length 
            let com;
            for(let i = count;i<comandsleft; i++){
              console.log("A")
              if(elimtags[i].tag == tag){
                com ="`"+elimtags[i].name+"`"

                if(elimtags[i].otherCommands.length > 0){
                  for(let j =0;j< elimtags[i].otherCommands.length;j++){
                  com +=", `"+elimtags[i].otherCommands[j]+"`"
                  }
                
                }  
                delete elimtags[i]
                count++
                comandsleft--;
                
                
                
              }
              
            }
            hembed.addField(tag,com)

            
          }

        }
        
       
        

        message.channel.send(hembed);
        
    }
}