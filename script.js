/**
 * Jafar Maksoud - Portfolio Script
 * Handles scroll animations and interactive element observers.
 */

document.addEventListener("DOMContentLoaded", function () {
    // إعدادات مراقبة عناصر الصفحة أثناء التمرير
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    // إنشاء المراقب لتفعيل الحركات (Animations)
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                // لإعادة تشغيل الأنيميشن في كل مرة يتم التمرير للأعلى والأسفل
                entry.target.classList.remove('in-view');
            }
        });
    }, observerOptions);

    // تتبع جميع العناصر التي تحمل كلاسات الحركة
    const animatedElements = document.querySelectorAll(
        '.animate-from-top, .animate-from-bottom, .animate-from-left, .animate-from-right'
    );

    animatedElements.forEach(el => observer.observe(el));
});