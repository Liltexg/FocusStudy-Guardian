// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on button click
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
    });
});
