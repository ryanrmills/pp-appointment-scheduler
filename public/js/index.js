let firstName = document.getElementById('fname-input');
let lastName = document.getElementById('lname-input');

let form = document.querySelector('form');

form.addEventListener('/submit-order', function(event) {
    let valid = true;
    if (firstName.value === ''){
        document.getElementById('first-name-error').style.opacity = '100%';
        valid = false;
    }

    if (lastName.value === ''){
        document.getElementById('last-name-error').style.opacity = '100%';
        valid = false;
    }

    if (valid === true) {
        this.submit();
        document.getElementById('first-name-error').style.opacity = '0%';
        document.getElementById('last-name-error').style.opacity = '0%';

    }
    event.preventDefault();
    
})

form.onsubmit = () => {
    if (firstName.value === ''){
        document.getElementById('first-name-error').style.opacity = '100%';
    }

    if (lastName.value === ''){
        document.getElementById('last-name-error').style.opacity = '100%';
    }
}