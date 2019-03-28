let speed = 50;
let velocityX = 1;
let velocityY = 1;
let logoElement = document.getElementById("logo");
let backgroundElement = document.getElementById("background");
logoElement.style.top = "10px";
logoElement.style.left = "10px";
let animation = function () {
    let currentY = parseInt(logoElement.style.top);
    let currentX = parseInt(logoElement.style.left);
    let backgroundWidth = parseInt(backgroundElement.style.width);
    let backgroundHeight = parseInt(backgroundElement.style.height);
    if (currentY >= backgroundHeight || currentY <= 0) {
        valocityY = -velocityY;
    }
    if (currentX >= backgroundWidth || currentX <= 0) {
        velocityX = -velocityX;
    }
    logoElement.style.top = (currentY + speed) + "px";
    logoElement.style.left = (currentX + speed) + "px";
}
animation();

var timer = window.setInterval(animation, 1000);