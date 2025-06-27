// main.js
import { validateLogin, saveLogin, getLoggedUser, clearLogin } from './auth.js';

// Executa assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    const btSignin = document.getElementById('btSignin');
    const btLogin  = document.getElementById('btLogin');
    const btLogout  = document.getElementById('btLogout');

    if (getLoggedUser()) {
        // Usuário já logado → ajusta UI
        btSignin.textContent = 'Signned in';
        btLogin.style.display = 'none';
        loadLoggedMenu();
    } else {
        btLogout.style.display = 'none'
    }
});

// Função chamada pelo formulário / botão de login
window.loginValidation = function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("loginMessage");
    const btSignin = document.getElementById('btSignin');
    const btLogin = document.getElementById('btLogin');
    const btLogout  = document.getElementById('btLogout');
    const user = validateLogin(username, password);
    if (user) {
        saveLogin(username);
        loadLoggedMenu();
        message.textContent = "Login successful!";
        btSignin.innerHTML = 'Signned in'
        btLogin.style.display = 'none'
        btLogout.style.display = 'block'
    } else {
        message.textContent = "Invalid username or password.";
        message.style.color = "red";
    }
};

// Faz logout e recarrega a página
window.logout = function () {
    clearLogin();
    location.reload();
};

// Carrega o menu de quem já está logado
function loadLoggedMenu() {
    import('./menuLogin.js')
        .then(() => {
            const oldMenu = document.querySelector("main-menu");
            const newMenu = document.createElement("main-menu-logged");
            oldMenu.replaceWith(newMenu);
        })
        .catch(err => console.error("Erro ao carregar menuLogin.js", err));
}