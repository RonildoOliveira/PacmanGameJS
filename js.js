var player = {
    x: 50,
    y: 100,
    pacmouth:320,
    pacdir:0,
    psize:32,
    speed:5
};

var gscore = 0;
var score = 0;

var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
canvas.height = 400;
canvas.width = 600;

var mainImage = new Image();
mainImage.ready = false;
// funcao = checkReady;
// retorno funcao = checkReady();
mainImage.onload = checkReady;
mainImage.src = "pac.png";

var keyclick = {};

document.addEventListener("keydown", function(event){
    keyclick[event.keyCode] = true;
    move(keyclick);
    console.log(keyclick);
},false);

document.addEventListener("keyup", function(event){
    keyclick[event.keyCode] = true;
    console.log(keyclick);
},false);

function move(keyclick){
    if(37 in keyclick){player.x-=player.speed; player.pacdir=64;}
    if(38 in keyclick){player.y-=player.speed; player.pacdir=96;}
    if(39 in keyclick){player.x+=player.speed; player.pacdir=0;}
    if(40 in keyclick){player.y+=player.speed; player.pacdir=32;}
    
    if(player.x >= canvas.width-32){player.x = 0;}
    if(player.y >= canvas.height-32){player.y = 0;}
    
    if(player.x < 0){player.x = canvas.width-32;}
    if(player.y < 0){player.x = canvas.height-32;}
    
    if(player.pacmouth == 320){
        player.pacmouth = 352;
    }else{
        player.pacmouth = 320;
    }
    render();
}

function checkReady() {    
	this.ready = true;
	play();
}

function play() {
	render();
}

/**/
function render() {
	context.fillStyle = "blue";
	context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(mainImage, 
                      player.pacmouth, player.pacdir, 
                      32, 32, 
                      player.x, player.y, 
                      player.psize, player.psize);
    context.font = "20px Verdana";
    context.fillStyle = "white";
    context.fillText("PAC: "+score+" X "+"GHS: "+gscore,2,18);
}

document.body.appendChild(canvas);
context.fillText('The force may be with you...', 10, 150);