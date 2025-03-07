import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const players = ["aryan","Natty","alfonso","ángel","alice","cristina","pablo","jorge","samuel"];
const roles =["campesino","lobo","cupido","vidente","bruja","cazador","alcalde","niña","rufian"];

var msg = [];
var name =[];

const port = 3000;
app.use(express.urlencoded({ extended: true }));


shuffleArray(roles);
app.get("/newgame",(req,res)=>{
    newgame();
    res.render("mainpage.ejs",{
        players:players,
        roles:roles,
        msg:msg,
        name:name
    });
});
app.get("/normal",(req,res)=>{
    res.render("mainpage.ejs",{
        players:players,
        roles:roles,
        msg:msg,
        name:name
    });
});
app.get("/",(req,res)=>{
    res.render("mainpage.ejs",{
        players:players,
        roles:roles,
        msg:msg,
        name:name
    });
});
app.get("/aryan",(req,res)=>{
    res.render("playerview.ejs",{
        pR:roles[0],
        pN:players[0]
    });
});
app.get("/natty",(req,res)=>{
    res.render("playerview.ejs",{
        pR:roles[1],
        pN:players[1]
    });
});
app.get("/alfonso",(req,res)=>{
    res.render("playerview.ejs",{
        pR:roles[2],
        pN:players[2]
    });
});
app.get("/angel",(req,res)=>{
    res.render("playerview.ejs",{
        pR:roles[3],
        pN:players[3]
    });
});
app.get("/alice",(req,res)=>{
    res.render("playerview.ejs",{
        pR:roles[4],
        pN:players[4]
    })
})
app.get("/cristina",(req,res)=>{
    res.render("playerview.ejs",{
        pR:roles[5],
        pN:players[5]
    })
})
app.get("/pablo",(req,res)=>{
    res.render("playerview.ejs",{
        pR:roles[6],
        pN:players[6]
    })
})
app.get("/jorge",(req,res)=>{
    res.render("playerview.ejs",{
        pR:roles[7],
        pN:players[7]
    })
})

app.get("/samuel",(req,res)=>{
    res.render("playerview.ejs",{
        pR:roles[8],
        pN:players[8]
    })
})
app.post("/submit",(req,res)=>{
    var msg2 = req.body.msg
    console.log(req.body)
    console.log(msg2)
    msg.push(msg2)
    res.sendFile(__dirname+"/public/guide.html")
})
app.listen(port,()=>{
    console.log("your app is active on port: "+port)
})
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));  // Random index between 0 and i
            [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap elements at index i and j
        }
    }
    

function newgame(){
    msg =[];
    shuffleArray(roles);
    console.log("new game")
}


