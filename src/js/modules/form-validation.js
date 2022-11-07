const form = document.forms.loginForm;
const input = form.elements.loginEmail;
const emailError = document.querySelectorAll(".form__error");

console.log(emailError[1]);

const form2 = document.forms.loginForm2;
const input2 = form2.elements.loginEmail2;

// form2.addEventListener("click", function (e) {
//   console.log(e);
// });

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
    showError(emailError[0]);
    preventDefault();
  } else {
    hideError(emailError[0]);
  }
});

input.addEventListener("focus", function (e) {
  if (!validateEmail(input)) {
    showError(emailError[0]);
  } else {
    hideError(emailError[0]);
  }
});

input.addEventListener("blur", function (e) {
  if (!validateEmail(input)) {
    showError(emailError[0]);
  } else {
    hideError(emailError[0]);
  }
});

input.addEventListener("input", function (e) {
  console.log(e.target.value);
  if (!validateEmail(e.target)) {
    showError(emailError[0]);
  } else {
    hideError(emailError[0]);
  }
});

////////// form2

function showError2(element) {
  element.style.display = "block";
  form2.style.border = "3px solid rgb(190, 12, 12)";
}

function hideError2(element) {
  element.style.display = "none";
  form2.style.border = "3px solid rgba(35, 177, 35, 1)";
}

form2.addEventListener("submit", function (e) {
  if (!validateEmail(input2)) {
    showError2(emailError[1]);
    preventDefault();
  } else {
    hideError2(emailError[1]);
  }
});

input2.addEventListener("focus", function (e) {
  if (!validateEmail(input2)) {
    showError2(emailError[1]);
  } else {
    hideError2(emailError[1]);
  }
});

input2.addEventListener("blur", function (e) {
  if (!validateEmail(input2)) {
    showError2(emailError[1]);
  } else {
    hideError2(emailError[1]);
  }
});

input2.addEventListener("input", function (e) {
  console.log(e.target.value);
  if (!validateEmail(e.target)) {
    showError2(emailError[1]);
  } else {
    hideError2(emailError[1]);
  }
});
