// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', toggleScrollButton);
});

function toggleScrollButton() {
    const scrollButton = document.querySelector('.scroll-button');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
}

function scrollToSection() {
    window.scroll({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

