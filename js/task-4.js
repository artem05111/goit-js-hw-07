const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onLogin);

function onLogin(evt) {
  evt.preventDefault();

  const emailInput = loginForm.elements.email.value.trim();
  const passwordInput = loginForm.elements.password.value.trim();

  if (emailInput === "" || passwordInput === "") {
    alert("All form fields must be filled in");
  } else {
    const loginData = {
      email: emailInput,
      password: passwordInput,
    };
    console.log(loginData);
    loginForm.reset();
  }
}
