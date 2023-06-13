var canvas=document.getElementById("myCanvas");
var context=canvas.getContext("2d");
var color="black";
var line=3;
var endpointx;
var endpointy;

var screenwidth = screen.width-70;
var screenheight = screen.height-300;
var currentsize = screen.width;
if (currentsize<992) {
    document.getElementById("myCanvas").width=screenwidth;
    document.getElementById("myCanvas").height=screenheight;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart", touchstart);
function touchstart(event){
    endpointx=event.touches[0].clientX-canvas.offsetLeft;
    endpointy=event.touches[0].clientY-canvas.offsetTop;
    color= document.getElementById("linecolor").value;
    line= document.getElementById("linewidth").value;
}
canvas.addEventListener("touchmove", touchmove);
function touchmove(event){
    var startpointx = event.touches[0].clientX - canvas.offsetLeft;
    var startpointy = event.touches[0].clientY - canvas.offsetTop;
        context.beginPath();
        context.strokeStyle = color;
        context.lineWidth = line;
        context.moveTo(endpointx, endpointy);
        context.lineTo(startpointx, startpointy);
        context.stroke();
    endpointx = startpointx;
    endpointy = startpointy;
}
function clean(){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
//pegando do input, é .value (!!!!!!!)