const productContainers = document.querySelectorAll('.slider-box');
const nxtBtn = document.querySelectorAll('.slider-next-btn');
const preBtn = document.querySelectorAll('.slider-prev-btn');

productContainers.forEach((item, i) => {
    let containerWidth = 442;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})