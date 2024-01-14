document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the user's response and CAPTCHA
    const rating = document.getElementById('rating').value;
    const captcha = document.getElementById('captcha-input').value;

    // Validate the user's response and CAPTCHA
    if (rating === '' || captcha === '') {
        alert('Please complete the survey and CAPTCHA before submitting.');
        return;
    }
    let newTab = window.open('', '_blank');

    newTab.location.href = 'hi.html';

});