document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(
        ".animate-from-top, .animate-from-left, .animate-from-right, .animate-from-bottom"
    );

    const checkAnimations = () => {
        const triggerBottom = window.innerHeight * 0.92;

        animatedElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;

            if (elTop < triggerBottom) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", checkAnimations);
    window.addEventListener("resize", checkAnimations);
    
    setTimeout(checkAnimations, 100);

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(checkAnimations, 200);
            setTimeout(checkAnimations, 500);
        });
    });
});