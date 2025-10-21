let firstName = document.getElementById('fname-input');
let lastName = document.getElementById('lname-input');

let form = document.getElementById('form');

form.onsubmit = () => {
    if (firstName.value === ''){
        document.getElementById('first-name-error').style.opacity = '100%';
    }

    if (lastName.value === ''){
        document.getElementById('last-name-error').style.opacity = '100%';
    }
}