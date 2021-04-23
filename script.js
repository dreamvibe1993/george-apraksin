const sections = document.querySelectorAll('section');

window.addEventListener('scroll', showSection)
showSection()
function showSection() {
    const triggerBottom = window.innerHeight / 5 * 4.3;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('show')
        } else {
            section.classList.remove('show')
        }
    })
}