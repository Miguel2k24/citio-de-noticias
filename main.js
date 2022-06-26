document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new-cards', { delay: 8 });
ScrollReveal().reveal('.cards-banner-one', { delay: 8 });
ScrollReveal().reveal('.cards-banner-two', { delay: 8 });