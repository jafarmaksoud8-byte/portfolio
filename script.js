function copyEmail() {
    const email = 'jafarmaksoud8@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const emailText = document.getElementById('email-text');
        emailText.textContent = 'Copied!';
        setTimeout(() => {
            emailText.textContent = 'Copy Email';
        }, 2000);
    });
}