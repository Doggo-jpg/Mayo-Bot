const fs = require("fs")
module.exports = () =>{
    console.log('Mayo Bot esta enlinea');
    let newsCache = [];
    fs.writeFile("./newsCache.json",JSON.stringify(newsCache), (err) =>{
          console.log(err);
          } );
}