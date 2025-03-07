import express from "express";
import axios from "axios";
import { fileURLToPath } from "url";
import path from "path";

// Get the directory name from the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use('/statico', express.static(__dirname + '/public'));
app.get("/",async (req,res) => {
    try{
         var response = await axios.get("https://animechan.io/api/v1/quotes/random")
         var data = JSON.stringify(response.data.data);
         var quote = JSON.stringify(response.data.data.content)
         var anime = JSON.stringify(response.data.data.anime.name)
         var name = JSON.stringify(response.data.data.character.name)
         const response2 = await axios.get("https://wallhaven.cc/api/v1/w/732o5e")
         const data2 = response2.data.data.thumbs.large

         //var data = JSON.stringify(response.data.results[0].url);
         console.log(data);
         res.render("index.ejs",{
            content:data,
            quote:quote,
            name:name,
            anime:anime,
            image:data2
         })
    }catch(error){
        res.render("index.ejs",{
          content:error
        })}
})
app.get("/extra",async(req,res) => {
  const response2 = await axios.get("https://wallhaven.cc/api/v1/w/732o5e")
         const data2 = response2.data.data.thumbs.large
         console.log(data2)
res.render("static.ejs",{
content:"hello world",
image:data2
})
})
app.listen(port,()=>{console.log("your app is running on port: "+port)});