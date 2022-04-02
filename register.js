const form = document.getElementById("form");
const userName = document.getElementById("user");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

// error show
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const span = formControl.querySelector("span");
  span.innerText = message;
}

// success show
function success(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// user valid check

function userNameValid(input) {
  const userReg = /^[A-Za-z\. ]{3,20}$/;
  if (userReg.test(input.value)) {
    success(input);
  } else {
    showError(
      input,
      `${characterField(input.id)} at must be mini 3 char and max 20 char`
    );
  }
}
// user emailcheck

function emailCheck(input) {
  const emailChecker = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
  if (emailChecker.test(input.value)) {
    success(input);
  } else {
    showError(
      input,
      `${characterField(input.id)} at must special char and max 8 char `
    );
  }
}
// user password check

function passwordCheck(input) {
  const passwordChecker =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$/;
  if (passwordChecker.test(input.value)) {
    success(input);
  } else {
    showError(
      input,
      `${characterField(
        input.id
      )} must 1 d 1 cap 1 lower 1 special char min 8 char `
    );
  }
}
// user confirm password check

function confirmPasswordCheck(input, input2) {
  if (input.value === input2.value) {
    success(input);
  } else {
    showError(input, `${characterField(input.id)} do not match `);
  }
}

function validChecker(inputArr) {
  inputArr.forEach(
    (input = function (input) {
      if (input.value.trim() === "") {
        showError(input, `${characterField(input.id)} is not required`);
      } else {
        success(input);
      }
    })
  );
}
function characterField(input) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  validChecker([userName, email, password, confirmPassword]);
  userNameValid(userName);
  emailCheck(email);
  passwordCheck(password);
  confirmPasswordCheck(confirmPassword, password);
});

// if (userName.value === "") {
//   showError(userName, "Username is required");
// } else {
//   success(userName);
// }
// if (email.value === "") {
//   showError(email, "Email is required");
// } else if (!isEmailValid(email.value)) {
//   showError(email, "Email is not valid");
// } else {
//   success(email);
// }
// if (password.value === "") {
//   showError(password, "Password is required");
// } else {
//   success(password);
// }
// if (confirmPassword.value === "") {
//   showError(confirmPassword, "confirmPassword is required");
// } else {
//   success(confirmPassword);
// }
