
module.exports ={
    name: "balance",
    aliases: ["bal","bl"],
    otherCommands:[],
    description: "revisa tu balance",
    parameters:[],
    execute(message,args,cmd,client,Discord,prefix,profileData){
        const username =message.author.tag
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00ffff')
        .setTitle(`Balance de `+username)
        .setImage(message.author.avatarURL())
        .addFields(
            {name: 'Cartera', value: `$${profileData.coins}`},
            {name: 'Banco', value: `$${profileData.bank}` }
        )
    message.channel.send(newEmbed);
    }
}