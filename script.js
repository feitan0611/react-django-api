document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const form = document.querySelector('form');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Merci pour votre message !');
        form.reset();
    });
});
