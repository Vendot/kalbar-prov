document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".wrapper-sosmed");
    const carousel = document.querySelector(".carousel-sosmed");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper-sosmed i");
    const carouselChildrens = [...carousel.children];
    let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
    let autoScrollInterval;

    // Get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    // Insert copies of the last few cards to beginning of carousel for infinite scrolling
    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    // Insert copies of the first few cards to end of carousel for infinite scrolling
    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    // Scroll the carousel at appropriate position to hide first few duplicate cards on Firefox
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
    });

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        // Records the initial cursor and scroll position of the carousel
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if(!isDragging) return; // if isDragging is false return from here
        // Updates the scroll position of the carousel based on the cursor movement
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    }

    const infiniteScroll = () => {
        // If the carousel is at the beginning, scroll to the end
        if(carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        }
        // If the carousel is at the end, scroll to the beginning
        else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }
        // Clear existing timeout & start autoplay if mouse is not hovering over carousel
        clearTimeout(timeoutId);
        if(!wrapper.matches(":hover")) autoPlay();
    }

    const autoPlay = () => {
        if(window.innerWidth >= 800 && isAutoPlay) {
            // Autoplay the carousel after every 2500 ms
            timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
        }
    }

    const startAutoScroll = () => {
        if(window.innerWidth < 800) {
            autoScrollInterval = setInterval(() => {
                if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.offsetWidth)) {
                    // If we've reached the end, go back to the start
                    carousel.scrollLeft = 0;
                } else {
                    // Scroll to the next item
                    carousel.scrollLeft += firstCardWidth;
                }
            }, 9000); // Scroll every 3 seconds
        }
    }

    const stopAutoScroll = () => {
        clearInterval(autoScrollInterval);
    }

    const handleResize = () => {
        if(window.innerWidth < 800) {
            startAutoScroll();
        } else {
            stopAutoScroll();
            autoPlay();
        }
    }

    // Event Listeners
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => {
        clearTimeout(timeoutId);
        stopAutoScroll();
    });
    wrapper.addEventListener("mouseleave", () => {
        autoPlay();
        startAutoScroll();
    });
    window.addEventListener("resize", handleResize);

    // Touch events for mobile
    carousel.addEventListener("touchstart", (e) => {
        dragStart(e.touches[0]);
        stopAutoScroll();
    });
    carousel.addEventListener("touchmove", (e) => dragging(e.touches[0]));
    carousel.addEventListener("touchend", () => {
        dragStop();
        startAutoScroll();
    });

    // Initial setup
    handleResize();
});