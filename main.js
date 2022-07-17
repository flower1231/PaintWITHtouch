var last_position_of_X , last_position_of_Y;
color= "black";
width_of_line= 3;
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

var width= screen.width;

NEW_width= screen.width - 70;
NEW_height= screen.height - 300;

if(width > 992){

    document.getElementById("myCanvas").width= NEW_width;
    document.getElementById("myCanvas").height= NEW_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart" , my_touchstart);

function my_touchstart(e){
    console.log("my_touchstart");

    color= document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_line").value;

    last_position_of_X= e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_Y= e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove" , my_touchmove);

function my_touchmove(e){
    console.log("my_touchmove");

    current_position_of_X= e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_Y= e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_X + "y = " + last_position_of_Y);
    ctx.moveTo(last_position_of_X, last_position_of_Y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_X + "y = " + current_position_of_Y);
    ctx.lineTo(current_position_of_X, current_position_of_Y);
    ctx.stroke();

    last_position_of_X = current_position_of_X; 
    last_position_of_Y = current_position_of_Y;
    
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}