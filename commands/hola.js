module.exports = {
    name: 'hola',
    aliases:[],
    otherCommands:[],
    description: "saluda a la raza",
    parameters:[],
    execute(message,args,cmd,client,Discord,prefix,profileData){

        //check for role
        if(message.member.roles.cache.has('824746411999625276')){
            message.channel.send('Que pedo Cabrones!');
        
        
        }else{
            message.channel.send('No puedes usar el comando por meco!');
           //add role message.member.roles.add('824746411999625276').catch(console.error);
        }
        
    }
}