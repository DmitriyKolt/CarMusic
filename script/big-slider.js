const productContainers = document.querySelectorAll('.slider-box');
const nxtBtn = document.querySelectorAll('.slider-next-btn');
const preBtn = document.querySelectorAll('.slider-prev-btn');

productContainers.forEach((item, i) => {
    let containerWidth = 442;
    console.log(nxtBtn[i])

    nxtBtn[i].addEventListener('click', () => {
        if(item.scrollLeft <= containerWidth*2) {
            item.scrollLeft += containerWidth; 
        } else {
            item.scrollLeft = 0; 
        }
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})