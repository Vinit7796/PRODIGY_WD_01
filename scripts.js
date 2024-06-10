// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-item a');

    // Toggle menu for smaller screens
    menuIcon.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Change navbar style on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Add hover effect to menu items
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.color = '#ff6347'; // Change text color on hover
        });

        item.addEventListener('mouseleave', function() {
            this.style.color = ''; // Reset text color
        });
    });

    // Smooth scroll for anchor links
    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
