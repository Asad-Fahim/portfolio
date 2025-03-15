const cursorDot = document.querySelector(".cursor-dot");
const cursorCircle = document.querySelector(".cursor-circle");

let mouseX = 0;
let mouseY = 0;
let dotX = 0;
let dotY = 0;
let circleX = 0;
let circleY = 0;

const delayFactor = 0.08; 
document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    dotX = mouseX;
    dotY = mouseY;
    cursorDot.style.left = dotX + "px";
    cursorDot.style.top = dotY + "px";

    circleX += (mouseX - circleX) * delayFactor;
    circleY += (mouseY - circleY) * delayFactor;
    cursorCircle.style.left = circleX + "px";
    cursorCircle.style.top = circleY + "px";

    requestAnimationFrame(animateCursor);
}

requestAnimationFrame(animateCursor);

document.addEventListener("mouseleave", () => {
    cursorDot.style.opacity = "0";
    cursorCircle.style.opacity = "0";
});

document.addEventListener("mouseenter", () => {
    cursorDot.style.opacity = "1";
    cursorCircle.style.opacity = "0.5";
});