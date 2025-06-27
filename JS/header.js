document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  if (header) {
    header.innerHTML = `
        <h1>Welcome to ForHealph!</h1>  
        <div id="loginContainer">
            <button id='btSignin'>Sign in <span class="fa fa-caret-down"></span></button>
            <div id="loginContainerHidden">
                <label for="username">Login: </label>
                <input type="text" name="username" id="username" required>
                <label for="password">Password: </label>
                <input type="password" name="password" id="password" required>
                <button type="button" onclick="loginValidation()" id='btLogin'>Log in</button>
                <button type="button" onclick="logout()" id='btLogout'>Log out</button>
                <p id="loginMessage"></p>
            </div>
        </div>
    `;
  }
});
