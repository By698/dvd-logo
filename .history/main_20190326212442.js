let speed = 100;
var velocityX = 1;
var velocityY = 1;
let logoElement = document.getElementById("logo");
let backgroundElement = document.getElementById("background");
console.log(backgroundElement.style);
logoElement.style.top = "10px";
logoElement.style.left = "10px";
backgroundElement.style.width = "1600px";
backgroundElement.style.height = "900px";
let animation = function () {
    let currentY = parseInt(logoElement.style.top);
    let currentX = parseInt(logoElement.style.left);
    let backgroundWidth = parseInt(backgroundElement.style.width);
    let backgroundHeight = parseInt(backgroundElement.style.height);
    console.log(currentY + "|" + backgroundWidth)
    if (currentY >= backgroundHeight || currentY <= 0) {
        valocityY = -velocityY;
        console.log("xDD");
    }
    if (currentX >= backgroundWidth || currentX <= 0) {
        velocityX = -velocityX;
        console.log(velocityX);
    }
    logoElement.style.top = ((currentY + speed) * velocityY) + "px";
    logoElement.style.left = ((currentX + speed) * velocityX) + "px";
}
animation();

var timer = window.setInterval(animation, 1000);