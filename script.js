// Mobile Menu Toggle (if applicable)
document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation Observer (if used for triggering classes)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});

// Function to copy email and show "تم النسخ بنجاح" tooltip
function copyEmail() {
    const emailText = document.getElementById("email-text").innerText;
    const tooltip = document.getElementById("copy-tooltip");

    navigator.clipboard.writeText(emailText).then(() => {
        tooltip.innerText = "تم النسخ بنجاح";
        tooltip.classList.add("show");

        setTimeout(() => {
            tooltip.classList.remove("show");
            tooltip.innerText = "Copy";
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}