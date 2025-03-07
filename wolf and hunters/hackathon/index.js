import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const players = ["Player 1","Player 2","Player 3","Player 4","Player 5","Player 6","Player 7","Player 8","Player 9"];
const roles =["villager","werewolves","cupid","fortune teller","witch","hunter","lider","kid","rufian"];
var msg = [];
var name =[];var p0msg = [];var p1msg = [];var p2msg = [];var p3msg = [];var p4msg = [];var p5msg = [];var p6msg = [];var p7msg = [];var p8msg = [];


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
app.get("/P1",(req,res)=>{
    res.render("playerview.ejs",{
        pR:roles[0],
        pN:players[0],
        msg:p0msg
    });
});
app.get("/P2",(req,res)=>{
    res.render("playerview.ejs",{
        pR:roles[1],
        pN:players[1],
        msg:p1msg
    });
});
app.get("/P3",(req,res)=>{
    res.render("playerview.ejs",{
        pR:roles[2],
        pN:players[2],
        msg:p2msg
    });
});
app.get("/P4",(req,res)=>{
    res.render("playerview.ejs",{
        pR:roles[3],
        pN:players[3],
        msg:p3msg
    });
});
app.get("/P5",(req,res)=>{
    res.render("playerview.ejs",{
        pR:roles[4],
        pN:players[4],
        msg:p4msg
    })
})
app.get("/P6",(req,res)=>{
    res.render("playerview.ejs",{
        pR:roles[5],
        pN:players[5],
        msg:p5msg
    })
})
app.get("/P7",(req,res)=>{
    res.render("playerview.ejs",{
        pR:roles[6],
        pN:players[6],
        msg:p6msg
    })
})
app.get("/P8",(req,res)=>{
    res.render("playerview.ejs",{
        pR:roles[7],
        pN:players[7],
        msg:p7msg
    })
})

app.get("/P9",(req,res)=>{
    res.render("playerview.ejs",{
        pR:roles[8],
        pN:players[8],
        msg:p8msg
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
    msg =[];p0msg=[];p1msg=[];p2msg=[];p3msg=[];p4msg=[];p5msg=[];p6msg=[];p7msg=[];p8msg=[];
    shuffleArray(roles);
    console.log("new game")
}


