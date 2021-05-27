const Meme = require('meme-api');
var meme = new Meme();
module.exports = {
    name: 'meme',
    aliases: [],
    description: "manda un meme random",
    execute(message,args,cmd,client,Discord){
      console.log(randomMeme());
      message.channel.send();

      
         
    }
}

const randomMeme = async () => {

       await meme.random("9gag"); // A random meme from 9gag
      //await meme.feed("9gag"); // A list of memes from 9gag
};