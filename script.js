// Example: Console log when the website is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Website fully loaded and parsed");
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
