let firstName = document.getElementById('fname-input');
let lastName = document.getElementById('lname-input');

let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    let valid = true;


    if (firstName.value.trim() === '') {
        document.getElementById('first-name-error').style.opacity = '100%';
        valid = false;
    }

    if (lastName.value.trim() === '') {
        document.getElementById('last-name-error').style.opacity = '100%';
        valid = false;
    }

    if (valid === true) {
        form.submit(); 
        document.getElementById('first-name-error').style.opacity = '0%';
        document.getElementById('last-name-error').style.opacity = '0%';
    }
    event.preventDefault();
});