module.exports = {
    tag:"admin",
    name: 'clear',
    aliases:['cl'],
    otherCommands:[],
    description: "Elimina los mensajes indicados de 1 a 100",
    parameters:['<numero de mensajes>'],
    async execute(message,args,cmd,client,Discord,prefix,profileData){

        if(!args[0]) return message.reply("debes especificar un numero!")
        if(isNaN(args[0])) return message("debe ser un numero!");
        if(args[0] >100 || args[0] <1 ) return message.reply("no es un numero valido para borrar")
        await message.channel.messages.fetch({limit:args[0]}).then(messages =>{message.channel.bulkDelete(messages)})

        


    }
}