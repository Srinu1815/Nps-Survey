(function () {
    // Variables to hold DOM elements and generated CAPTCHA code
    let captchaDiv, captchaInput, generatedCaptcha;

    // Function to generate a random 6-digit CAPTCHA code
    function generateCaptcha() {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captcha = '';
        for (let i = 0; i < 6; i++) {
            captcha += chars[Math.floor(Math.random() * chars.length)];
        }
        return captcha;
    }

    // Function to draw the CAPTCHA code
    function drawCaptcha() {
        captchaDiv.style.fontSize = '24px';
        captchaDiv.style.border = '1px solid #ddd';
        captchaDiv.style.padding = '10px';
        captchaDiv.style.width = '300px';
        captchaDiv.style.textAlign = 'center';
        captchaDiv.innerHTML = generatedCaptcha;
    }

    // Function to validate the CAPTCHA input
    function validateCaptcha() {
        let userCaptcha = captchaInput.value.toUpperCase();
        if (userCaptcha && userCaptcha === generatedCaptcha) {
            // Valid CAPTCHA
            alert('CAPTCHA validation successful!');
