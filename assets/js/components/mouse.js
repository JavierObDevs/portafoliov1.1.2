const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ff6d24",
  "#ea6324",
  "#d45923",
  "#c05022",
  "#ab4720",
  "#963e1e",
  "#82361c",
  "#6f2e19",
  "#5b2616",
  "#491e12",
  "#37170d",
  "#261005"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

document.addEventListener("mousemove", function (e) {
  coords.x = e.pageX;
  coords.y = e.pageY;
});

function animateCircles() {

  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - -5 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

export default animateCircles