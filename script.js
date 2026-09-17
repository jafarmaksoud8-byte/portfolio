// Advanced Scroll & Navigation Animations Handler (تكرار الحركات دائماً عند الصعود والنزول والتنقل السريع)
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(
        ".animate-from-top, .animate-from-left, .animate-from-right, .animate-from-bottom"
    );

    const checkAnimations = () => {
        const triggerBottom = window.innerHeight * 0.92;

        animatedElements.forEach(el => {
            const elRect = el.getBoundingClientRect();

            // إذا كان العنصر دخل إلى الشاشة من الأسفل أو الأعلى
            if (elRect.top < triggerBottom && elRect.bottom >= 0) {
                el.classList.add("active");
            } else {
                // إزالة الكلاس فور خروج العنصر من الشاشة لكي يتكرر التأثير حتماً في المرة القادمة
                el.classList.remove("active");
            }
        });
    };

    // الاستماع لأحداث التمرير وتغيير حجم النافذة
    window.addEventListener("scroll", checkAnimations);
    window.addEventListener("resize", checkAnimations);

    // التعامل مع الضغط على روابط الـ Navbar للانتقال السريع (Smooth Scroll) وإعادة إطلاق الحركات
    document.querySelectorAll('.nav-links a, .hero-buttons a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    // إعادة فحص الحركات بعد انتهاء الانتقال السريع
                    setTimeout(checkAnimations, 400);
                }
            }
        });
    });

    // تشغيل فوري أول ما تفتح الصفحة
    setTimeout(checkAnimations, 100);
});

// Function to copy text on click and show "تم النسخ بنجاح" alert inside the button
function copyText(elementId, buttonElement) {
    const textToCopy = document.getElementById(elementId).innerText;
    const alertBox = buttonElement.querySelector(".copy-alert");

    navigator.clipboard.writeText(textToCopy).then(() => {
        alertBox.classList.add("show");

        setTimeout(() => {
            alertBox.classList.remove("show");
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}