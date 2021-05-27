

module.exports ={
    name:'saluda',
    description:'este comando manda un saludo',
    execute(message,args,cmd,client,Discord){
        message.channel.send("hola que tal");
    }
}