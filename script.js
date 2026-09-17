// Intersection Observer for Scroll Animations (تشغيل الحركات عند النزول والتنقل بين الأقسام)
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(
        ".animate-from-top, .animate-from-left, .animate-from-right, .animate-from-bottom"
    );

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // إذا بدك الحركة تتفعل مرة وحدة لما تنزل:
                // observerInstance.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });
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