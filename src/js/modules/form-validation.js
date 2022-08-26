const form = document.forms.loginForm;
const input = form.elements.loginEmail;
const emailError = document.querySelector(".form__error");

function validateEmail(element) {
  const email = element.value;

  const regEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  return regEx.test(email);
}

function showError(element) {
  element.style.display = "block";
  form.style.border = "3px solid rgb(190, 12, 12)";
}

function hideError(element) {
  element.style.display = "none";
  form.style.border = "3px solid rgba(35, 177, 35, 1)";
}

form.addEventListener("submit", function (e) {
  if (!validateEmail(input)) {
    showError(emailError);
    preventDefault();
  } else {
    hideError(emailError);
  }
});

input.addEventListener("focus", function (e) {
  if (!validateEmail(input)) {
    showError(emailError);
  } else {
    hideError(emailError);
  }
});

input.addEventListener("blur", function (e) {
  if (!validateEmail(input)) {
    showError(emailError);
  } else {
    hideError(emailError);
  }
});

input.addEventListener("input", function (e) {
  console.log(e.target.value);
  if (!validateEmail(e.target)) {
    showError(emailError);
  } else {
    hideError(emailError);
  }
});
