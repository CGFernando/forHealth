class MainMenuLogged extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <a href="index.html" target="_self">Home</a>
            <div id="tools">Tools
                <div id="toolsLink">
                    <a href="./pags/tools/reverse.html" target="_self">Reverse</a>
                    <a href="./pags/tools/complement.html" target="_self">Complement</a>
                    <a href="./pags/tools/reverse-complement.html" target="_self">Reverse-Complement</a>
                    <a href="./pags/tools/reaction-mix.html" target="_self">Reaction mix</a>
                    <a href="./pags/tools/bmi.html" target="_self">BMI</a>
                </div>
            </div>
            <a href="./pags/login/bmi.html" target="_self">Legislacao</a>
            <a href="./pags/about.html" target="_self">About</a>
        </nav>
        `;
    }
}
customElements.define('main-menu-logged', MainMenuLogged);