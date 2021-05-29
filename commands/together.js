
const { DiscordTogether } = require('discord-together');

module.exports = {
    name: 'together',
    aliases:[],
    otherCommands:[],
    description: "crea una invitacion para realizar una actividad juntos en canal de voz\nActividades: Youtube,Poker,Chess,Betrayal,Fishing,Custom application",
    parameters:['<actividad>'],
    execute(message,args,cmd,client,Discord,prefix,profileData){
      
      client.discordTogether = new DiscordTogether(client);

       if(message.member.voice.channel) {
         if(!args.length) return message.channel.send("together <actividad>");
            console.log(args[0])
            client.discordTogether.createTogetherCode(message.member.voice.channelID, args[0]).then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    }
}