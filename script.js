let email = document.querySelector('.email');
let password = document.querySelector('.password');
let emailError = document.querySelector('.email + p');
let passwordError = document.querySelector('.password + p');

function validateAll(email, password) {
    const emailIsValid = email.includes('@') && email.includes('.') && email.length > 3;
    const passwordIsValid = password.length > 8;
    if (emailIsValid && passwordIsValid) {
        document.querySelectorAll('p').forEach(p => {
            p.innerText = "";
        });
    }
    return emailIsValid && passwordIsValid;
}

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    if (validateAll(email.value, password.value)) {
        if (confirm('Login Successful. Proceed?')) {
            email.value = '';
            password.value = '';
            let text = document.createElement('p');
            text.textContent = 'All good to go!';
            text.style.color = 'green';
            text.style.paddingTop = '5px';
            text.style.paddingBottom = '5px';
            document.querySelector('.result').appendChild(text);
        } else {
            window.location.reload();
        }
    } else {
        alert('Login Failed');
        email.value = '';
        password.value = '';
        window.location.reload();
    }
});
