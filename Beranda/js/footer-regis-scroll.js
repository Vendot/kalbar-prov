window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var iconUp = document.querySelector('.icon-up');

    if (scrollTop > 100) {
        iconUp.style.display = "block";
    } else {
        iconUp.style.display = "none";
    }
};