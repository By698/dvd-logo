let velocityX = -2;
let velocityY = -2;
let logoElement = document.getElementById("logo");
let backgroundElement = document.getElementById("background");
logoElement.style.top = "0px";
logoElement.style.left = "0px";
logoElement.style.width = "200px";
logoElement.style.height = "100px";
backgroundElement.style.width = "1200px";
backgroundElement.style.height = "600px";

let ran

let animation = function () {
    let currentY = parseInt(logoElement.style.top);
    let currentX = parseInt(logoElement.style.left);
    let backgroundWidth = parseInt(backgroundElement.style.width);
    let backgroundHeight = parseInt(backgroundElement.style.height);
    let logoWidth = parseInt(logoElement.style.width);
    let logoHeight = parseInt(logoElement.style.height);
    if (currentY + logoHeight >= backgroundHeight || currentY <= 0) {
        velocityY = -velocityY;
    }
    if (currentX + logoWidth >= backgroundWidth || currentX <= 0) {
        velocityX = -velocityX;
    }
    logoElement.style.top = (currentY + velocityY) + "px";
    logoElement.style.left = (currentX + velocityX) + "px";

    window.requestAnimationFrame(animation);
}
//var timer = window.setInterval(animation);
animation();
