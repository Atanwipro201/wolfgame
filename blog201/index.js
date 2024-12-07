import express from 'express'

const app = express();
const port = 3000;
var posts = [];
var title = [];
var text =[];

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.render("index.ejs",{
        posts:posts,title:title,text:text
    });
})

app.get("/create",(req,res)=>{
    res.render("index",{
        posts : posts,
    });
});

app.post("/submit",(req,res)=>{
    console.log(req.body);
})

app.listen(port,()=>{
    console.log("your program is running on port: " + port);
})

