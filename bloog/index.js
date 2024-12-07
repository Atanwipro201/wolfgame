//all the needed functions
import express from "express";

//all the values
const app = express();
const port = 3000

var posts = [Post("hello","hello world")]
var data = {
    posts : posts
}
//requests
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));



app.get("/create",(req,res)=>{
    res.sendFile("/html/index.html")
    console.log("page delivered")
})
app.get("/",(req,res)=>{
    res.render("index.ejs",data)
})
app.put("/submit",(req,res)=>{
    res.sendFile("html/create.html")
    console.log(req.body)
})
//functions(if needed)
function Post(title,text, image){
    this.title = title;
    this.text = text;
    this.image = image;
}
app.listen(port,()=>{
    console.log('listening on port : ' + port)
})

//post1
//push("Post"+(posts.length+1))