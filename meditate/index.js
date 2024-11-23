//const timechange = document.querySelector(".timeLeft").innerHTML
function meditationTimer(){
    var time = 1
    setTimeout(() => {
        
    }, 1000);
while(time<6){
    document.querySelector(".timeLeft").innerHTML =(6-time)+"seconds left"
    time++
    setTimeout(1000)
}
while (6 < time < 8) {
    document.querySelector(".timeLeft").innerHTML =(2-time)+"seconds left"
    time++
    setTimeout(1000)
}
while (8 < time < 15) {
    document.querySelector(".timeLeft").innerHTML =(7-time)+"seconds left"
    time++
    setTimeout(1000)
}
if(time === 0)
    document.querySelector(".timeLeft").innerHTML ="meditate again"
}