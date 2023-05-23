const slider = document.querySelector(".slider input");
const dragLine = document.querySelector(".slider .drag-line");
const image = document.querySelector(".image .img-2");

slider.oninput = ()=>{
    let sliderVal =slider.value ;
    
    dragLine.style.left = sliderVal + "%" 
    image.style.width = sliderVal + "%" 


}
