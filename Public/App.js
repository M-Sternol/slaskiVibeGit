//import { BoxEvent } from "../Admin/Admin.js";
const AppRoot = document.getElementById("root");
export const AppStart = () => {
    AppRoot.innerHTML = `
   <header>
        <h1>Śląski Vibe</h1>
        <img src="../IMG/Przykładowelogo.png" alt="Logo">
        <nav>
        <a href="../Wydarzenia/Events.html">Wydarzenia</a>
        <a href="../Atrakcje/Attractions.html">Atrakcje</a>
        <a href="../Transport/Transport.html">Transport</a>
        <a href="../Kontakt/Contact.html">Kontakt</a>
    </nav>
    </header>
    
   `

}

const weatherInfo = () => {
    const KEY = "e0b87c9ef3308579f1603b669de340dd";
    navigator.geolocation.getCurrentPosition((location) => showWeather(location));
    const showWeather = async (loc) => {
        const city = document.getElementById("CityName");
        const maintemp = document.getElementById("MainTemp")
        const feelslikeTemp = document.getElementById("FeelsLike")
        const clouds = document.getElementById("Clouds")
        const humidity = document.getElementById("Humidity")
        const waethermessage = document.getElementById("WeatherMessage")

        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}&appid=${KEY}`
        const result = await fetch(URL);
        const weather = await (result).json();
        console.log(weather);

        const currentMassage = (temp) => {
            if (temp >= 30) {
                return "Idealnie do Opalania"
            }
            else if (temp >= 20 && temp < 30) {
                return "Piękny Letni dzień"
            }
            else if (temp >= 10 && temp < 20) {
                return "W sam raz do biegania"
            }
            else {
                return "jest dość chłodno"
            }
        }

        const convert = (temp) => Math.round(temp - 272.15);
        city.textContent = weather.name;
        maintemp.textContent = `${convert(weather.main.temp)}°C`;
        feelslikeTemp.textContent = `${convert(weather.main.feels_like)}°C`;
        clouds.textContent = `${weather.clouds.all}%`
        humidity.textContent = `${weather.main.humidity}%`
        waethermessage.textContent = currentMassage(convert(weather.main.temp));
    }

};
window.addEventListener("DOMContentLoaded", () => {
    weatherInfo(),
        AppStart()
        
})