let speed = 10;
let velocityX = 1;
let velocityY = 1;
let logoElement = document.getElementById("logo");
let backgroundElement = document.getElementById("background");
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
    console.log(currentX)
}
console.log("xd");
animation();