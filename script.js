document.addEventListener("DOMContentLoaded", function () {
    // 1. تفعيل ظهور العناصر بالحركات عند التمرير
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.anim-top, .anim-left, .anim-right, .anim-bottom').forEach((section) => {
        observer.observe(section);
    });

    // 2. تلوين القسم النشط بالأزرق والباقي بالأبيض في القائمة العلوية
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});