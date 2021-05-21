module.exports = (Discord, client, message) =>{
    const prefix = '-'

    client.user.setPresence({
        activity: {
            name: `- ${prefix}help`,
        }
    })

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    
    // if the command exists executes command
    try {
        if(cmd){
            client.commands.get(cmd).execute(message,args,cmd,client,Discord);
            }
    } catch (error) {
        console.log(error);
    }
   
   
}