// ==========================================
// DROPDOWN EN MÓVIL
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');

    if (dropdown) {
        var dropdownToggle = dropdown.querySelector('.dropdown-toggle');

        if (window.innerWidth <= 992) {
            dropdownToggle.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        }

        window.addEventListener('resize', function() {
            if (window.innerWidth > 992) {
                dropdown.classList.remove('active');
            }
        });
    }
});

// ==========================================
// MENU MOBILE TOGGLE
// ==========================================
var menuToggle = document.getElementById('menuToggle');
var nav = document.getElementById('nav');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// ==========================================
// HEADER STICKY
// ==========================================
var header = document.getElementById('header');
window.addEventListener('scroll', function() {
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 100);
    }
});
