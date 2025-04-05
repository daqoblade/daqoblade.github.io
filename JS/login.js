const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const welcome = document.querySelector("#welcome")

const username = localStorage.getItem("username");

function onLogin(event) {
    event.preventDefault();
    const tempUsername = loginInput.value;
    welcome.innerText = `Welcome, ${tempUsername}!`
    welcome.classList.toggle("hidden")
    loginForm.classList.toggle("hidden")
    localStorage.setItem("username", tempUsername);
}

loginForm.addEventListener("submit", onLogin)

if (username) {
    welcome.innerText = `Welcome, ${username}!`
    welcome.classList.toggle("hidden")
    loginForm.classList.toggle("hidden")
}