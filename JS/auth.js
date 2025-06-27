//auth.js
const users = [
    { username: "admin", password: "admin" }
];

export function validateLogin(username, password) {
    return users.find(u => u.username === username && u.password === password);
}

export function saveLogin(username) {
    localStorage.setItem("loggedUser", username);
}

export function getLoggedUser() {
    return localStorage.getItem("loggedUser");
}

export function clearLogin() {
    localStorage.removeItem("loggedUser");
}
