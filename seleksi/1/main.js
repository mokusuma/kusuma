function buatLineChart() {
    
    const inputData = document.querySelector("#input-data");
    
    let  data = inputData.split(',').map(Number);


    const canvas = document.querySelector("#canvas");
    const c = canvas.getContext('2d');

    // ukuran canvas
    canvas.width = 800;
    canvas.height = 400;

    // batas data
    const maxData = Math.max(...data);

    // garis sumbu x dan y 
    c.beginPath();
    c.moveTo(50, 20);
    c.lineTo(50, canvas.height - 20);
    c.lineTo(canvas.width - 20, canvas.height - 20);
    c.stroke();

    // menggambar garis chart
    let xInterval = (canvas.width - 70) / (data.length - 1);
    c.beginPath ();
    c.moveTo(50, canvas.height - 20);
    for( let i = 0; i < data.length; i++) {
        let x = 50 + i * xInterval;
        let y = canvas.height - 20 - (data[i] / maxData) * (canvas.height - 40);
        c.lineTo(x, y);
        c.stroke();
}


}