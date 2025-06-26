// main.js
import { validateLogin, saveLogin, getLoggedUser, clearLogin } from './auth.js';

window.loginValidation = function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("loginMessage");

    const user = validateLogin(username, password);
    if (user) {
        saveLogin(username);
        message.textContent = "Login successful!";
        message.style.color = "green";
        loadLoggedMenu();
    } else {
        message.textContent = "Invalid username or password.";
        message.style.color = "red";
    }
};

window.logout = function () {
    clearLogin();
    location.reload();
};

function loadLoggedMenu() {
    import('./menuLogin.js')
        .then(() => {
            const oldMenu = document.querySelector("main-menu");
            const newMenu = document.createElement("main-menu-logged");
            oldMenu.replaceWith(newMenu);
        })
        .catch(err => console.error("Erro ao carregar menuLogin.js", err));
}

// Verifica login automático ao abrir
const user = getLoggedUser();
if (user) {
    loadLoggedMenu();
    const message = document.getElementById("loginMessage");
    if (message) {
        message.textContent = `Welcome back, ${user}!`;
        message.style.color = "green";
    }
}
