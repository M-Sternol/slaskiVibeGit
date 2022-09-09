const AppContact = document.getElementById("root-contact");
export const Contact = () => {
    AppContact.innerHTML = `
    <header>
    <h1>Kontakt</h1>
    <img src="../IMG/Przykładowelogo.png" alt="Logo">
    <nav>
        <a href="../Public/App.html">Strona Główna</a>
        <a href="../Wydarzenia/Events.html">Wydarzenia</a>
        <a href="../Atrakcje/Attractions.html">Atrakcje</a>
        <a href="../Transport/Transport.html">Transport</a>
    </nav>
    </header>
    `
}
window.addEventListener("DOMContentLoaded", () => {
    Contact()
})

