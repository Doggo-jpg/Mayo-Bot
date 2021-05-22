const message = require("../Events/guild/message");

module.exports={
    name:'embedtest',
    description: "embeds!",
    execute(message,args,cmd,client,Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00ffff')
        .setTitle('Rules')
        .setURL('https://twitch.tv/soymoikas')
        .setDescription('This is an embed')
        .addFields(
            {name: 'Rule 1', value: 'be nice'}
        )
        .setImage('https://i1.wp.com/unaaldia.hispasec.com/wp-content/uploads/2019/10/discord_logo.jpg?fit=796%2C417&ssl=1')
        .setFooter('check rules');
    message.channel.send(newEmbed);
    }

    
}