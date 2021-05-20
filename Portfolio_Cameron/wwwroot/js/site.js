// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


// Animations & Effects
$(".navbar").hide().fadeToggle(800);
$(".navbar-nav").hide().fadeToggle(1000);
$(".navbar-brand").hide().fadeToggle(1000);

// Stick navbar to top if window scrolled.
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        document.getElementById('navbar').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
    } else {
        document.getElementById('navbar').classList.remove('fixed-top');
        // remove padding top from body
        document.body.style.paddingTop = '0';
    }
});