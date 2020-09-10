const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submit = document.getElementById('submit');


submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (username.value !== '') {
        if(username.value.length < 3){
            showError(username,'Username must be greater than 3 charecters');
        }else if(username.value.length > 25){
            showError(username,'Username must be less than 25 charecters')
        }else{
            showSuccess(username);
        }
    } else {
        showError(username, 'Username can\'t be blank');
    }

    if (email.value !== '') {
        const validate = validateEmail(email.value);
        if(validate === true){
            showSuccess(email);
        }else{
            showError(email, 'Invalid Email');
        }
    } else {
        showError(email, 'Email can\'t be blank');
    }

    if (password.value !== '') {
        showSuccess(password);
    } else {
        showError(password, 'Password can\'t be blank');
    }

    if (password.value !== password2.value) {
        showError(password2, 'Password Mismatch');
        showError(password, null)
    } else if (password2.value === '') {
        showError(password2, 'Field Can\'t be blank');
    } else {
        showSuccess(password2);
    }
    setTimeout((clearFields),5000*2);
})


function showSuccess(input) {
    input.style.border = '2px solid green';
    setTimeout(function () {
        input.style.border = 'none'
    }, 5000);
}


function showError(input, message) {
    input.style.border = '2px solid red';
    input.nextSibling.nextSibling.textContent = message;
    setTimeout(function () {
        input.nextSibling.nextSibling.textContent = '';
        input.style.border = 'none';
    }, 5000)
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const clearFields = function(){
    username.value = '';
    email.value = '';
    password.value = '';
    password2.value = '';
}

console.info(
    'Username must be within 3 to 25 charecters'+'\n'+'Email is according to the right format'+'\n'+'password and confirm password should be matched'
);
console.info(
    'Error is set to be shown for 5sec'+'\n'+'password mismatch error'+'\n'+'and all the input fields cleared after 10sec'
);