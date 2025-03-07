const players = ["p1","p2","p3","p4","p5","p6","p7","p8","p9"]
const roles =["campesino","lobo","cupido","vidente","bruja","cazador","alcalde","niña","rufian"]
var rolesDone =[]

function getRoles(){
    for (let i = 0; i < players.length; i++) {
        const element = players[i];
        const randomRole = roles[Math.floor(Math.random()*8)]
        console.log(element+"'s role is :'")
        checkRoll(element,randomRole)

        
    }
    newgame()
}
function checkRoll(element,rR){
    var randomRole2 = roles[Math.floor(Math.random()*9)]
    if (rolesDone.includes(rR)){
        if(rolesDone.includes(randomRole2)){
            checkRoll(element,rR)
        }
        else{
            console.log(element+" = "+randomRole2)
            document.getElementById(element).innerHTML= element + ": " + randomRole2
            rolesDone.push( randomRole2 )  
        }
    }
    else{
        document.getElementById(element).innerHTML= element + ": " + rR
        rolesDone.push( rR )
    }
}
function getRoles2() {
    for (let index = 0; index < roles.length; index++) {
        const element2 =  roles[index]
    }
    
}
function newgame(){
    rolesDone =[]
}
