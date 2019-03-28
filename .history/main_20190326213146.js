let velocityX = 100;
let velocityY = 100;
let logoElement = document.getElementById("logo");
let backgroundElement = document.getElementById("background");
console.log(backgroundElement.style);
logoElement.style.top = "10px";
logoElement.style.left = "10px";
logoElement.style.width = "400px";
logoElement.style.height = "200px";
backgroundElement.style.width = "1600px";
backgroundElement.style.height = "900px";
let animation = function () {
    let currentY = parseInt(logoElement.style.top);
    let currentX = parseInt(logoElement.style.left);
    let backgroundWidth = parseInt(backgroundElement.style.width);
    let backgroundHeight = parseInt(backgroundElement.style.height);
    let logoWidth = parseInt(logoElement.style.width);
    let logoHeight = parseInt(logoElement.style.height);
    console.log(velocityX + "|" + velocityY)
    if (currentY + logoHeight >= backgroundHeight || currentY <= 0) {
        velocityY = -velocityY;
    }
    if (currentX + logoWidth >= backgroundWidth || currentX <= 0) {
        velocityX = -velocityX;
    }
    logoElement.style.top = (currentY + velocityY) + "px";
    logoElement.style.left = (currentX + velocityX) + "px";
}
animation();

var timer = window.setInterval(animation, 1000);