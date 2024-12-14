import express from "express";
const app = express()
const players = ["p1","p2","p3","p4","p5","p6","p7","p8","p9"];
const roles =["campesino","lobo","cupido","vidente","bruja","cazador","alcalde","niña","rufian"];
var rolesDone =[];
var playerRoles = [];
const port = 3000;
getRoles();
app.get("/",(req,res)=>{
    newgame();
    res.render("mainpage.ejs",{
        playerRoles:playerRoles
    })
})
app.get("/1",(req,res)=>{
    res.render("playerview.ejs",{
        pR:playerRoles[0]
    })
})
app.get("/2",(req,res)=>{
    res.render("playerview.ejs",{
        pR:playerRoles[1]
    })
})
app.get("/3",(req,res)=>{
    res.render("playerview.ejs",{
        pR:playerRoles[2]
    })
})
app.get("/4",(req,res)=>{
    res.render("playerview.ejs",{
        pR:playerRoles[3]
    })
})
app.get("/5",(req,res)=>{
    res.render("playerview.ejs",{
        pR:playerRoles[4]
    })
})
app.get("/6",(req,res)=>{
    res.render("playerview.ejs",{
        pR:playerRoles[5]
    })
})
app.listen(port,()=>{
    console.log("your app is active on port: "+port)
})
///functions

function checkRoll(element,rR){
    var randomRole2 = roles[Math.floor(Math.random()*9)];
    if (rolesDone.includes(rR)){
        if(rolesDone.includes(randomRole2)){
            checkRoll(element,rR);
        }
        else{
            console.log(element+" = "+randomRole2);
            rolesDone.push( randomRole2 );
            playerRoles.push(element+": "+rR);
        }
    }
    else{
        rolesDone.push( rR )
        console.log(element+" = "+rR);
        playerRoles.push(element+": "+rR)
    }
}
function getRoles(){
    for (let i = 0; i < players.length; i++) {
        const element = players[i];
        const randomRole = roles[Math.floor(Math.random()*8)]
        console.log(element+"'s role is :'")
        checkRoll(element,randomRole)

        
    }
}
function newgame(){
    rolesDone =[];
    playerRoles =[];
    getRoles();
}


