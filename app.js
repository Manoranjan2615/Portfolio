function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}
window.onscroll = function () {
    toggleScrollToTopBtn();
};
function toggleScrollToTopBtn() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
        scrollToTopBtn.style.transition = "transform 1s ease, filter 1s ease";
        scrollToTopBtn.style.transform = "translateX(0)";
    } else {
        scrollToTopBtn.style.transform = "translateX(100px)";
        scrollToTopBtn.style.transition = "transform 1s ease, filter 1s ease";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
