document.addEventListener("DOMContentLoaded", function () {

    // 1. تفعيل الحركات بحيث تتكرر في كل مرة يتم فيها الدخول والخروج من القسم
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // عندما يصبح العنصر داخل الشاشة، نفّذ الحركة
                entry.target.classList.add('is-visible');
            } else {
                // عندما يخرج العنصر خارج الشاشة، احذف الكلاس لتعيد الحركة نفسها عند العودة إليه
                entry.target.classList.remove('is-visible');
            }
        });
    }, { threshold: 0.15 });

    // مراقبة كل عنصر داخلي يحمل كلاس الحركة
    document.querySelectorAll('.anim-top, .anim-left, .anim-right, .anim-bottom').forEach((element) => {
        observer.observe(element);
    });

    // 2. تلوين القائمة العلوية تلقائياً حسب القسم النشط
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

    // 3. تفعيل زر النسخ مع رسالة التنبيه (Toast)
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