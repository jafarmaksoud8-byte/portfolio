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