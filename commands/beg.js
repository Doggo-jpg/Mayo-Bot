const profileModel = require('../models/profileSchema');

module.exports ={
    name: "beg",
    aliases: [],
    otherCommands:[],
    permisions:[],
    description: "pide monedas",
    parameters:[],
    async execute(message,args,cmd,client,Discord,prefix,profileData){
        const begAction = ["chupo pito","dio las nalgas","golpeo tortugas","hizo un favor","mato un vagabundo","salio con su sugar daddy"];
        const ranbeg = Math.floor(Math.random() * 5);
        const randomNum = Math.floor(Math.random() * 500) + 1;
        const response = await profileModel.findOneAndUpdate({userID: message.author.id,},{
            $inc:{
                coins: randomNum,
            },
        });
            return message.channel.send(`${message.author.username} ${begAction[ranbeg]} por $${randomNum}`);
    }
}