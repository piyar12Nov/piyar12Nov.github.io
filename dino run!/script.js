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

var score = 0;
var dead = false;
var checkDead = setInterval (function() {
    var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("Left"));
    
    if(blockLeft<20 && blockLeft>0 && dinoTop>=130) {
        block.style.animation ="none";
        block.style.display="none";
        console.log("you're dead");
        dead = true;
    }else if(dinoTop == 150 && dead == false){
        score = ++score;
        console.log("get score " + score);
        document.getElementById("score").innerHTML = "Score  : " + score
    }
},10);
