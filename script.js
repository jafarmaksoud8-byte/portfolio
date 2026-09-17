// Advanced Scroll Animations Handler (تفعيل الحركات عند التمرير والضغط على القوائم)
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

    // تشغيل عند التحميل والتمرير وتغيير الحجم
    window.addEventListener("scroll", checkAnimations);
    window.addEventListener("resize", checkAnimations);

    // تشغيل فوري أول ما تفتح الصفحة
    setTimeout(checkAnimations, 100);

    // تفعيل الحركات فوراً عند النقر على روابط القائمة العلوية للانتقال السريع للأقسام
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(checkAnimations, 200);
            setTimeout(checkAnimations, 500); // تأكيد إضافي بعد انتهاء السكرول السلس
        });
    });
});

// Function to copy text on click and show alert inside the button
function copyText(elementId, buttonElement) {
    const textElement = document.getElementById(elementId);
    if (!textElement) return;
    const textToCopy = textElement.innerText;
    const alertBox = buttonElement.querySelector(".copy-alert");

    navigator.clipboard.writeText(textToCopy).then(() => {
        if (alertBox) {
            alertBox.classList.add("show");
            setTimeout(() => {
                alertBox.classList.remove("show");
            }, 2000);
        }
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}