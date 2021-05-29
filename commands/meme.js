const spanishmemes = require('spanish.memes');

module.exports = {
    name: 'meme',
    aliases: [],
    otherCommands:[],
    description: "manda un meme random",
    parameters:[],
    execute(message,args,cmd,client,Discord,prefix,profileData){
      let meme;
      vidoim = Math.floor(Math.random() * 2); 
        if(vidoim == 0){
          meme = spanishmemes.Meme()
        }else{
          meme = spanishmemes.VideoMeme()
        }
      
        message.channel.send(meme)
     
      
      
      
         
    }
}