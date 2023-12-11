document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
    });

    // Dynamic year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Typewriter effect
    const typewriterElement = document.getElementById("typewriter");
    if (typewriterElement) {
        const typewriterText = "My name is Wilfred Naraga, welcome to my online resume in website format built using HTML, CSS, and Javascript.";
        let i = 0;
        const speed = 100;
        const typewriter = () => {
            if (i < typewriterText.length) {
                typewriterElement.innerHTML += typewriterText.charAt(i);
                i++;
                setTimeout(typewriter, speed);
            }
        };
        typewriter();
    }

    // Scroll to top button
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    scrollToTopBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
