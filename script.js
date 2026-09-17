document.addEventListener("DOMContentLoaded", function () {

    // 1. مراقبة الحركات وإعادتها في كل مرة يتم فيها التمرير فوق العناصر
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.anim-top, .anim-left, .anim-right, .anim-bottom').forEach((element) => {
        observer.observe(element);
    });

    // 2. تحديث رابط القائمة النشط (Active Navbar Link) أثناء التمرير
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 250)) {
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

    // 3. تفعيل زر النسخ الفوري (Copy to Clipboard) مع رسالة Toast
    const copyButtons = document.querySelectorAll('.copy-btn');
    const toast = document.getElementById('toast');

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const textToCopy = button.getAttribute('data-copy');

            navigator.clipboard.writeText(textToCopy).then(() => {
                toast.classList.add('show');

                setTimeout(() => {
                    toast.classList.remove('show');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    });

});