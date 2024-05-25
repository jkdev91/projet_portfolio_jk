// toogle icon navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// scroll section link

const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop -150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };
    });

    // sticky navbar
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

//     // Attendre que les éléments .portfolio-box soient générés
//     const portfolioBoxes = document.querySelectorAll('.portfolio-box');
//     if (portfolioBoxes.length > 0) {
//     ScrollReveal().reveal(portfolioBoxes, {origin: 'right'});
// }

    
};

// // scroll reveal
// document.addEventListener('DOMContentLoaded', () => {
//     ScrollReveal({
//         distance: '80px',
//         duration: 2000,
//         delay: 200,
//     });

//     ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
//     ScrollReveal().reveal('.home-img, .contact form', {origin: 'bottom'});
//     ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
//     ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'});

// });


