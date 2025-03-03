const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {
  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

const magneticElements = document.querySelectorAll(".btn-box a, .home-sci a");

magneticElements.forEach((element) => {
  element.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = element.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);

    element.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  element.addEventListener("mouseleave", () => {
    element.style.transform = "translate(0, 0)";
  });
});
const cursorDot = document.querySelector(".cursor-dot");
const cursorCircle = document.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";
    cursorCircle.style.left = e.clientX + "px";
    cursorCircle.style.top = e.clientY + "px";
});

document.addEventListener("mouseleave", () => {
    cursorDot.style.opacity = "0";
    cursorCircle.style.opacity = "0";
});

document.addEventListener("mouseenter", () => {
    cursorDot.style.opacity = "1";
    cursorCircle.style.opacity = "1";
});