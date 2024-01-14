function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomChar() {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return chars[randomNumber(0, chars.length - 1)];
}

function createCaptcha() {
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += randomChar();
    }
    return captcha;
}

function drawCaptcha() {
    let captchaDiv = document.getElementById('captcha');
    captchaDiv.style.fontSize = '24px';
    captchaDiv.style.border = '1px solid #ddd';
    captchaDiv.style.padding = '10px';
    captchaDiv.style.width = '300px';
    captchaDiv.style.textAlign = 'center';
    captchaDiv.innerHTML = createCaptcha();
}

drawCaptcha();

// Validate captcha when form is submitted
document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let userCaptcha = document.getElementById('captcha-input').value;
    let realCaptcha = document.getElementById('captcha').innerHTML;

    if (userCaptcha && userCaptcha.toUpperCase() === realCaptcha) {
        // Valid captcha, submit the form
    } else {
        alert('Please enter the correct captcha before submitting.');
    }
});
