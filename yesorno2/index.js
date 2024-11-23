
var count = 0;
function yesorno(){
    var num = Math.random()*2;
    console.log("good "+ num )
    num = Math.floor(num);
    console.log("all good for now "+ num )
    if (num === 1){
        document.querySelector("#main").innerHTML = "yes"
        document.querySelector("body").classList.remove("no")
        document.querySelector("body").classList.add("yes")
    }
    else if (num === 0){
        document.querySelector("#main").innerHTML = "no"
        document.querySelector("body").classList.remove("yes")
        document.querySelector("body").classList.add("no")
    }
    else{
        document.querySelector("#main").innerHTML = "try again"
    }
count++
document.querySelector("#count").innerHTML = "🔁"+count
}

