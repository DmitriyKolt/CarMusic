const slides = document.querySelectorAll('.char-slide')
const slides2 = document.querySelectorAll('.char-slide2')
let index = 0;
let prevBtn = document.querySelectorAll('.char-prev-btn')
let nextBtn = document.querySelectorAll('.char-next-btn')
let prevBtn2 = document.querySelectorAll('.char-prev-btn2')
let nextBtn2 = document.querySelectorAll('.char-next-btn2')
console.log(slides)

for(let btnPrev of prevBtn) {
    btnPrev.addEventListener('click', () => {
        prev()
        console.log('-')
    })
}

for(let btnNext of nextBtn) {
    btnNext.addEventListener('click', () => {
        next()
        console.log('+')
    })
}

for(let btnPrev of prevBtn2) {
    btnPrev.addEventListener('click', () => {
        prev2()
        console.log('-')
    })
}

for(let btnNext of nextBtn2) {
    btnNext.addEventListener('click', () => {
        next2()
        console.log('+')
    })
}

		
		
function next() {
    console.log('++++++')
    slides[index].classList.add('char-hidden');
    index = index+1;
    if(index > 1) {
        index = 0
        slides[index].classList.remove('char-hidden')
    } else {
        slides[index].classList.remove('char-hidden')
    }
    
}

function prev() {
    console.log('+-----')
    slides[index].classList.add('char-hidden');
    index = index-1;
    if(index < 0){
        index = 1
        slides[index].classList.remove('char-hidden')
    } else {
        slides[index].classList.remove('char-hidden')
    }
    
}

function next2() {
    console.log('++++++')
    slides2[index].classList.add('char-hidden');
    index = index+1;
    if(index > 1) {
        index = 0
        slides2[index].classList.remove('char-hidden')
    } else {
        slides2[index].classList.remove('char-hidden')
    }
    
}

function prev2() {
    console.log('+-----')
    slides2[index].classList.add('char-hidden');
    index = index-1;
    if(index < 0){
        index = 1
        slides2[index].classList.remove('char-hidden')
    } else {
        slides2[index].classList.remove('char-hidden')
    }
    
}

		