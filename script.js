// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const srOnlyText = document.getElementById('srOnlyText');

const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        srOnlyText.textContent = 'Switch to Light Mode';
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        srOnlyText.textContent = 'Switch to Dark Mode';
    }
}

// Scroll Progress Indicator
const scrollProgressBar = document.getElementById('scrollProgressBar');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgressBar.style.width = scrollPercent + '%';
});

// Floating Navigation Dots
const sections = document.querySelectorAll('section');
const navDots = document.querySelectorAll('.nav-dot');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navDots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.getAttribute('data-section') === current) {
            dot.classList.add('active');
        }
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Project Modals Logic
const modalTriggers = document.querySelectorAll('[data-modal-target]');
const modalCloseButtons = document.querySelectorAll('.modal-close');
const modals = document.querySelectorAll('.modal');

// Open modal
modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const targetId = trigger.getAttribute('data-modal-target');
        const modal = document.querySelector(targetId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal via close button
modalCloseButtons.forEach(button => {
    button.addEventListener('click', () => {
        closeAllModals();
    });
});

// Close modal by clicking outside
modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeAllModals();
        }
    });
});

function closeAllModals() {
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = '';
}

// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
