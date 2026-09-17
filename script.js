// Advanced Scroll Animations Handler (تفعيل الحركات بشكل مستمر ودائم عند كل تنقل وتمرير صعوداً ونزولاً)
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(
        ".animate-from-top, .animate-from-left, .animate-from-right, .animate-from-bottom"
    );

    const checkAnimations = () => {
        const triggerBottom = window.innerHeight * 0.90;

        animatedElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;

            if (elTop < triggerBottom) {
                el.classList.add("active");
            } else {
                // تفعيل إعادة الحركة عند الصعود والنزول المتكرر بين الأقسام
                el.classList.remove("active");
            }
        });
    };

    // تشغيل عند التحميل والتمرير وتغيير الحجم
    window.addEventListener("scroll", checkAnimations);
    window.addEventListener("resize", checkAnimations);

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