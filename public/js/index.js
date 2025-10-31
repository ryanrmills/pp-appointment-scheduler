const form = document.querySelector("form");
const firstName = document.getElementById("fname-input");
const lastName = document.getElementById("lname-input");
const fnameError = document.getElementById("fname-error");
const lnameError = document.getElementById("lname-error");

form.addEventListener("submit", (e) => {
  let valid = true;

  fnameError.textContent = "";
  lnameError.textContent = "";

  if (firstName.value.trim() === "") {
    fnameError.textContent = "First name is required.";
    fnameError.style.color = "red";
    valid = false;
  }

  if (lastName.value.trim() === "") {
    lnameError.textContent = "Last name is required.";
    lnameError.style.color = "red";
    valid = false;
  }

  if (!valid) e.preventDefault();
});
