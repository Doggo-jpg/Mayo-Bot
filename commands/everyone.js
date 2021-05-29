module.exports = {
    tag:"admin",
    name: 'everyone',
    aliases:[],
    otherCommands:[],
    description: "menciona a todos en tu mensaje",
    parameters:["mensaje"],
    execute(message,args,cmd,client,Discord,prefix,profileData){
      if(args.length<0) return message.reply(`${prefix}${name} <${parameters}>`);
      message.channel.send("@everyone "+message.content);
    }
}