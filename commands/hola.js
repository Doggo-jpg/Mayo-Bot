module.exports = {
    name: 'hola',
    description: "saluda a la raza",
    execute(message,args,cmd,client,Discord){

        //check for role
        if(message.member.roles.cache.has('824746411999625276')){
            message.channel.send('Que pedo Cabrones!');
        
        
        }else{
            message.channel.send('No puedes usar el comando por meco!');
           //add role message.member.roles.add('824746411999625276').catch(console.error);
        }
        
    }
}