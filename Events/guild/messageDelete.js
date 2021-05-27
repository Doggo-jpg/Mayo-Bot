require('dotenv').config

module.exports = async(Discord, client, message) =>{
    const prefix = process.env.PREFIX;

    await Discord.Util.delayFor(2000);

   console.log(message.content)
   const channel = message.guild.channels.cache.find(ch => ch.id === '846560265264300043');
   if(!channel) return;

   // Fetch a couple audit logs than just one as new entries could've been added right after this event was emitted.
    let logs = await message.guild.fetchAuditLogs({type:72});
    let entry = logs.entries.first();

   channel.send(`${entry.executor} \nborro "${message.content}" de  ${message.author.username}. \npa que lo borra culo`);
    
   
   
}