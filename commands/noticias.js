const translate = require("translate") ;
const fs = require("fs")
const fetch = require("node-fetch");
module.exports = {
    tag:"info",
    name: 'noticias',
    aliases:[],
    otherCommands:[],
    description: "busca noticias en internet",
    parameters:["[busqueda]"],
    async execute(message,args,cmd,client,Discord,prefix,profileData){
      /*
      translate(args[0], { from: "es", to: "en" }).then(text => {
        console.log(text); 
        
      });
      */
      let newsCache =[]
      newsCache = JSON.parse(fs.readFileSync("./newsCache.json","utf8"));
      let sortBy;
      let search;
      let date;
        const channel ='845207517071278100'
        let fnews;
        const larrow = '⬅';
        const rarrow = '➡';
        let index=0;
         let newsEmbed = new Discord.MessageEmbed()
      if(args.length>0){
        search = args[0];
        await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=7e06fb6b454d47f681b357e3c6d95406`)
        .then(response => response.json())
        .then(news =>{
          fnews = news
          

        }).catch(err => console.log("error: "+err))
      }
      if(!args.length){
        await fetch(`https://newsapi.org/v2/top-headlines?country=mx&apiKey=7e06fb6b454d47f681b357e3c6d95406`)
        .then(response => response.json())
        .then(news =>{
          fnews = news

        }).catch(err => console.log("error: "+err))
      }
          newsEmbed.setTitle(fnews.articles[index].title)
          newsEmbed.setAuthor(fnews.articles[index].author)
          newsEmbed.setDescription(fnews.articles[index].description)
          newsEmbed.setURL(fnews.articles[index].url)
          newsEmbed.setImage(fnews.articles[index].urlToImage)
        
        let membed = await message.channel.send(newsEmbed);
        let mid = membed.id
        let nObj={}
        newsCache =[]
        console.log(fnews)
        nObj={
          nholder:{
            msgID:mid,
            indx:0,
            thenews:fnews
          }
        }
          console.log(nObj)
          newsCache.push(nObj)
          
          fs.writeFile("./newsCache.json",JSON.stringify(newsCache), (err) =>{
          console.log(err);
          } );
        membed.react(larrow);
        membed.react(rarrow)
        client.on('messageReactionAdd', async (reaction,user)=>{
          if(reaction.message.partial) await reaction.message.fetch();
          if(reaction.partial) await reaction.message.fetch();
          if(user.bot) return;
          if(!reaction.message.guild) return;
          /*
          for(let i =0;i<newsCache.length;i++){
            
            if(newsCache[i].nholder.msgID == reaction.message.id){
              fnews = await newsCache[i].nholder.thenews
              index = await newsCache[i].nholder.indx
            }
          }*/

            if(reaction.emoji.name === larrow){
              if(index > 0){
                index--;
                console.log(fnews);
                newsEmbed.setTitle(fnews.articles[index].title)
                newsEmbed.setAuthor(fnews.articles[index].author)
                newsEmbed.setDescription(fnews.articles[index].description)
                newsEmbed.setURL(fnews.articles[index].url)
                newsEmbed.setImage(fnews.articles[index].urlToImage)
                reaction.message.edit(newsEmbed)
              }
            }
            if(reaction.emoji.name === rarrow){
                index++;
                newsEmbed.setTitle(fnews.articles[index].title)
                newsEmbed.setAuthor(fnews.articles[index].author)
                newsEmbed.setDescription(fnews.articles[index].description)
                newsEmbed.setURL(fnews.articles[index].url)
                newsEmbed.setImage(fnews.articles[index].urlToImage)
                reaction.message.edit(newsEmbed)
            }

        });
    }
}