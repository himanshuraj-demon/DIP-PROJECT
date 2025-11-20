

// Enhanced cursor effect on hover
const interactiveElements = document.querySelectorAll('a, button, input, textarea, .feature-box, .member-card, .social-link');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cylinder.style.width = '50px';
        cylinder.style.height = '70px';
        cylinder.style.transition = 'width 0.3s ease, height 0.3s ease';
    });
    
    element.addEventListener('mouseleave', () => {
        cylinder.style.width = '30px';
        cylinder.style.height = '50px';
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.querySelectorAll('.product-box, .feature-box, .member-card, .feedback-form').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'linear-gradient(135deg, rgba(255, 211, 172, 0.98), rgba(255, 181, 171, 0.98))';
        navbar.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, rgba(255, 211, 172, 0.95), rgba(255, 181, 171, 0.95))';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
});