// 1. Mobile Navigation Toggle
const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Close nav when a link is clicked (for single-page smooth scroll)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
            });
        });
    });
}
navSlide();


// 2. Fade In on Scroll Animation (Professional Touch)
const faders = document.querySelectorAll('.fade-up');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px" // Starts animation 100px before reaching the top of viewport
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('faded-in');
            // Apply animation style dynamically based on delay class
            if (entry.target.classList.contains('delay-1')) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards 0.2s';
            } else if (entry.target.classList.contains('delay-2')) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards 0.4s';
            } else {
                 entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
