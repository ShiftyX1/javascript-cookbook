const form = document.getElementById('form')
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/


function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';

    if (username === '' || username.length < 3) {
        errorMessage.textContent += 'Имя пользователя должно состять более чем из трех символов!';
        return;
    }

    if (!emailPattern.test(email)) {
        errorMessage.textContent += 'Введите корректный E-Mail';
        return;
    }

    if (password === '' || password.length < 8) {
        errorMessage.textContent += 'Пароль должен быть длинной более 8 символов!';
        return;
    }

    if (!(password === password2)) {
        errorMessage.textContent += 'Пароли не совпадают!';
        return;
    }

    window.location.replace("success.html")
};



form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
});

