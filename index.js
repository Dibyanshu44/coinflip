var h=0;
var t=0;
const sound=new Audio("sound.mp3");
function toss(){   
    var flip=Math.floor(Math.random()*2)+1;
    if(flip===1){
        document.querySelector(".vid").setAttribute("src","head.mp4");
        h++;
    }
    else{
        document.querySelector(".vid").setAttribute("src","tail.mp4");
        t++;
    }
    sound.play();
    setTimeout(function fun() {
        document.querySelector(".heads").innerHTML="Heads:"+h;
        document.querySelector(".tails").innerHTML="Tails:"+t;
    },1800);
}
document.querySelector(".coin").addEventListener("click",toss);