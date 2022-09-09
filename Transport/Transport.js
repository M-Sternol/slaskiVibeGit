const AppTransport = document.getElementById("root-transport");
export const Transport = ()=> {
    AppTransport.innerHTML = `
    <header>
        <h1>Transport</h1>
        <img src="../IMG/Przykładowelogo.png" alt="Logo">
        <nav>
        <a href="../Public/App.html">Strona Główna</a>
        <a href="../Wydarzenia/Events.html">Wydarzenia</a>
        <a href="../Atrakcje/Attractions.html">Atrakcje</a>
        <a href="../Kontakt/Contact.html">Kontakt</a>
    </nav>
    </header>
    `
    
  }
  window.addEventListener("DOMContentLoaded", () => {
    Transport()
})
