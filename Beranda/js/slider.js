let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let timeRunning = 1000;
let timeAutoNext = 3000;

nextDom.onclick = function() {
    showSlider('next');    
};

prevDom.onclick = function() {
    showSlider('prev');    
};

let runTimeOut;
let autoSlide = setInterval(() => {
    showSlider('next');
}, timeAutoNext);

function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    
    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
}

nextDom.onclick = function() {
    clearInterval(autoSlide);
    showSlider('next');
    autoSlide = setInterval(() => {
        showSlider('next');
    }, timeAutoNext);
};

prevDom.onclick = function() {
    clearInterval(autoSlide);
    showSlider('prev');
    autoSlide = setInterval(() => {
        showSlider('next');
    }, timeAutoNext);
};
