const AppAbout = document.getElementById("root-about");
export const About = () => {
    AppAbout.innerHTML = `
    <header>
    <h1>Atrakcje</h1>
    <img src="../IMG/Przykładowelogo.png" alt="Logo">
    <nav>
        <a href="../Public/App.html">Strona Główna</a>
        <a href="../Wydarzenia/Events.html">Wydarzenia</a>
        <a href="../Transport/Transport.html">Transport</a>
        <a href="../Kontakt/Contact.html">Kontakt</a>
    </nav>
</header>
    `
}
window.addEventListener("DOMContentLoaded", () => {
    About()
})
