//all the needed functions
import express from "express";

//all the values
const app = express();
const port = 3000
var data ={
    posts : posts
}
var post = {}
//requests
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port,()=>{
    console.log('listening on port : ' + port)
})

app.get("/",(req,res)=>{
    res.render("index.ejs",data)
})
//functions(if needed)