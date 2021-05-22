require('dotenv').config

module.exports = (Discord, client, message) =>{
    const prefix = process.env.PREFIX;

    client.user.setPresence({
        activity: {
            name: `- ${prefix}help`,
        }
    })

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    
    // if the command exists executes command
    try {
        if(command){
            command.execute(message,args,cmd,client,Discord);
            
            }
    } catch (error) {
        console.log(error);
    }
   
   
}