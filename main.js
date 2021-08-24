canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
greencar_image = "car2.png";
greencar_width = 75;
greencar_height = 100;
greencar_x = 5;
greencar_y = 325;
canvas_width = 800;
canvas_height = 600;
parking_lot_image = "parkingLot.jpg";
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = parking_lot_image;
    greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadCar;
    greencar_imgTag.src = greencar_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas_width, canvas_height);
}
function uploadCar(){
    ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    if (keypressed == 38)
    {
        up();
        console.log("up");
    }
    if (keypressed == 40)
    {
        down();
        console.log("down");
    }
    if (keypressed == 37)
    {
        left();
        console.log("left");
    }
    if (keypressed == 39)
    {
        right();
        console.log("right");
    }
}
 function up(){
     if (greencar_y >= 0){
         greencar_y = greencar_y - 10;
         console.log("x = " + greencar_x + " y = " + greencar_y);
         uploadBackground();
         uploadCar();
     }
 }
function down(){
    if (greencar_y <= 500){
        greencar_y = greencar_y + 10;
        console.log("x = " + greencar_x + " y = " + greencar_y);
        uploadBackground();
        uploadCar();
    }
}
function left(){
    if (greencar_x >= 0){
        greencar_x = greencar_x - 10;
        console.log("x = " + greencar_x + " y = " + greencar_y);
        uploadBackground();
        uploadCar(); 
    }   
}
function right(){
    if (greencar_x <= 725){
        greencar_x = greencar_x + 10;
        console.log("x = " + greencar_x + " y = " + greencar_y);
        uploadBackground();
        uploadCar(); 
    }       
}