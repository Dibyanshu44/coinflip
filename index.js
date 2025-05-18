var flip=Math.floor(Math.random()*2)+1;
if(flip===1){
    document.querySelector(".vid").setAttribute("src","head.mp4");
}
else{
    document.querySelector(".vid").setAttribute("src","tail.mp4");
}
