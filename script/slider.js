const productContainers2 = document.querySelectorAll('.characteristics-slider-box');
const nxtBtn2 = document.querySelectorAll('.char-next-btn');
const preBtn2 = document.querySelectorAll('.char-prev-btn');

console.log(nxtBtn2)
productContainers2.forEach((item, i) => {
    let containerWidth = 636;
    item.scrollLeft = 0;
    
    nxtBtn2[i].addEventListener('click', () => {
        if(item.scrollLeft <= containerWidth*2) {
            item.scrollLeft += containerWidth; 
        } else {
            item.scrollLeft = 0; 
        }
        
    })

    preBtn2[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

