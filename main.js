//canvas and context for the game
var canvas;
var context;

var FPS = 20;//game frame rate
var gs = 10;//grid size
var ts = 20;//target size
var px = 0; var py = 0;//player position
var dx = 1; var dy = 1;//player direction
var target_count = 7;

//when the window loads up
window.onload = function(){

    loadCanvas();//load the game area
    setInterval(runGame, 1000/FPS);
};

function loadCanvas(){
    canvas = document.getElementById('game_area');
    context = canvas.getContext('2d');
}

//this is running every frame
function runGame(){

    drawBackground();
    
    showBall();
    checkBoundaries();
   
}

function drawBackground(){
    //draw background
    context.fillStyle = '#000000';    
    context.fillRect(0,0, canvas.width, canvas.height);
}

function loadTargets(){

    context.fillStyle = '#FF0000';
    for(var i = 0; i < target_count; i++){
        var xx = Math.random() * gs | 0;
        var yy = Math.random() * gs | 0;
        context.fillRect(xx * gs, yy * gs, ts, ts);
    }
}


function showBall(){

    context.fillStyle = '#FFFFFF';
    context.beginPath();
    context.arc(px * gs, py * gs, gs, 0, 2 * Math.PI, false);
    context.fill();

    px += dx;
    py += dy;
}

function checkBoundaries(){
    
    if(px * gs >= canvas.width || px * gs <= 0)
        dx *= -1;
    if(py * gs >= canvas.height || py * gs <= 0 )
        dy *= -1;

}
