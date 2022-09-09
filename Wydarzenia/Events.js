const AppEvents = document.getElementById("root-events");
export const Events = ()=> {
    AppEvents.innerHTML = `
    <header>
    <h1>Wydarzenia</h1>
    <img src="../IMG/Przykładowelogo.png" alt="Logo">
    <nav>
        <a href="../Public/App.html">Strona Główna</a>
        <a href="../Atrakcje/Attractions.html">Atrakcje</a>
        <a href="../Transport/Transport.html">Transport</a>
        <a href="../Kontakt/Contact.html">Kontakt</a>
    </nav>
    </header>
    `  
  }
  window.addEventListener("DOMContentLoaded", () => {
    Events()
})
