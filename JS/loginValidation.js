const users = [
    {
        "username": "admin",
        "password": "admin"
    }
];

// Verificar login salvo ao carregar a página
const loggedUser = localStorage.getItem("loggedUser");
if (loggedUser) {
    import('./menuLogin.js')
    .then(() => {
        const oldMenu = document.querySelector("main-menu");
        const newMenu = document.createElement("main-menu-logged");
        oldMenu.replaceWith(newMenu);

        const loginMessage = document.getElementById("loginMessage");
        if (loginMessage) {
            loginMessage.textContent = `Welcome back, ${loggedUser}!`;
            loginMessage.style.color = "green";
        }
    })
    .catch(err => {
        console.error("Erro ao carregar menuLogin.js", err);
    });
}

function loginValidation() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const loginMessage = document.getElementById("loginMessage");

    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

    if (user) {
        loginMessage.textContent = "Login successful!";
        loginMessage.style.color = "green";

        // Salvar o login no localStorage
        localStorage.setItem("loggedUser", usernameInput);
        //Toda vez que a página for carregada, o site verifica se há um usuário salvo.
        //Se houver, ele carrega automaticamente o menu de usuário logado, sem pedir login de novo.

        // Troca o componente <main-menu> para o menu com opções de login
        const oldMenu = document.querySelector("main-menu");
        const newMenu = document.createElement("main-menu-logged");
        oldMenu.replaceWith(newMenu);

        // Remove o menu atual do DOM
        import('./menuLogin.js').catch(err => {
            console.error("Erro ao carregar menuLogin.js", err);
        });
    } else {
        loginMessage.textContent = "Invalid username or password.";
        loginMessage.style.color = "red";
    }
}
// Torna a função visível no escopo global para o HTML usar no onclick
window.loginValidation = loginValidation;

function logout() {
    localStorage.removeItem("loggedUser");
    location.reload(); // recarrega a página para mostrar o menu padrão
}

window.logout = logout;
