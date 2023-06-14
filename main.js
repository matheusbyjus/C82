var mouseEvent="empty";
var lastPositionx, lastPositiony;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
largura=1;

canvas.addEventListener("mousedown",myMouseDown);

function myMouseDown(e){
    color=document.getElementById("color").value;
    largura=document.getElementById("largura").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove",myMouseMove);

function myMouseMove(e){
    MouseX=e.clientX-canvas.offsetLeft;
    MouseY=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=largura;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + positionX + "y = " + positionY);

        ctx.moveTo(positionX,positionY);

        console.log("current position of x and y coordinates = ");
        console.log("x = " + MouseX + "y = " + MouseY);

        ctx.lineTo(MouseX, MouseY);
        ctx.stroke();
    }
    positionX=MouseX;
    positionY=MouseY;
}

canvas.addEventListener("mouseup",myMouseUp);

function myMouseUp(e){
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave",myMouseLeave);

function myMouseLeave(e){
    mouseEvent="mouseleave";
}

function limpar(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}