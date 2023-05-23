
// function chart() {

const canvas = document.querySelector("#canvas");
const c = canvas.getContext("2d");

    // let i1 = parseFloat(document.getElementById('i1').value);
    // let i2 = parseFloat(document.getElementById('i2').value);
    // let i3 = parseFloat(document.getElementById('i3').value);
    // let i4 = parseFloat(document.getElementById('i4').value);
    // let i5 = parseFloat(document.getElementById('i5').value);
    // let i6 = parseFloat(document.getElementById('i6').value);
    // let i7 = parseFloat(document.getElementById('i7').value);
    // let i8 = parseFloat(document.getElementById('i8').value);
    
    let i1 = prompt("i1")
    let i2 = prompt('i2');
    let i3 = prompt('i3');
    let i4 = prompt('i4');
    let i5 = prompt('i5');
    let i6 = prompt('i6');
    let i7 = prompt('i7');
    let i8 = prompt('i8');
    
    canvas.width = 800;
    canvas.height = 400;
    c.beginPath();
    c.moveTo(65, -i1 * 3.7 + 380);
    c.lineTo(160, -i2 * 3.7 + 380);
    c.lineTo(255, -i3 * 3.7 + 380);
    c.lineTo(350, -i4 * 3.7 + 380);
    c.lineTo(445, -i5 * 3.7 + 380);
    c.lineTo(540, -i6 * 3.7 + 380);
    c.lineTo(635, -i7 * 3.7 + 380);
    c.lineTo(730, -i8 * 3.7 + 380);

    c.stroke();





    
//     c.beginPath();
//     c.moveTo(65, -i1.value * 3.7 + 380);
//     c.lineTo(160, -i2.value * 3.7 + 380);
//     c.lineTo(255, -i3.value * 3.7 + 380);
//     c.lineTo(350, -i4.value * 3.7 + 380);
//     c.lineTo(445, -i5.value * 3.7 + 380);
//     c.lineTo(540, -i6.value * 3.7 + 380);
//     c.lineTo(635, -i7.value * 3.7 + 380);
//     c.lineTo(730, -i8.value * 3.7 + 380);

//     c.stroke();
//     console.log("hello")
// }
