console.log("p")

let white = document.querySelector(".white")

document.addEventListener('mousemove', mouse);

function mouse(e) {

     let   x = e.clientX;
     let   y = e.clientY;

    white.style.left = x -1500  + "px";
    white.style.top = y  -1500 + "px";

}