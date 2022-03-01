var dino = document.getElementById("dino");
function jump(){
    dino.classList.add("animate");
}
function jump() {
if(dino.classList != "animate"){
    dino.classList.add("animate");
}
setTimeout(function() {
    dino.classList.remove("animate");
},500);
}
var checkDead = setInterval (function() {
    var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("Left"));
    if(blockLeft<20 && blockLeft>0 && dinoTop>=130) {
        block.style.animation ="none";
        block.style.display="none";
        alert("you're dead");
    }
},10);
