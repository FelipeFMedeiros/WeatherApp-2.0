const start = performance.now();
import { imgJS } from "./img.js";

export const indexJS = (searchTerm) => {
  // Lógica para o loader
  const mainContainer = document.querySelector(".main-container");
  const loaderContainer = document.querySelector(".loader");
  mainContainer.style.animation = "none";
  loaderContainer.style.animation = "none";
  mainContainer.style.display = "none";
  loaderContainer.style.display = "flex";

  // Pegando APIs do .env
  /*const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const TIMEZONE_API_KEY = import.meta.env.VITE_TIMEZONE_API_KEY;*/

  // Pegando referências do DOM
  const tittleDOM = document.querySelector(".tittle-location-name");
  const subTittleDOM = document.querySelector(".subtittle-formated-address");
  const timeDOM = document.querySelector(".time-container");
  const dateDOM = document.querySelector(".date-container");
  const sunriseDOM = document.querySelector(".sunrise-text");
  const sunsetDOM = document.querySelector(".sunset-text");

  const tempContainerI = document.querySelector(
    ".content main .insights div:nth-child(1) li .bx"
  );
  const tempContainerII = document.querySelector(
    ".content main .insights div:nth-child(2) li .bx"
  );

  const tempDOM = document.querySelector(".local-temp");
  const feelsLikeDOM = document.querySelector(".local-feels-like");
  const umidityDOM = document.querySelector(".local-umidity");
  const windDOM = document.querySelector(".local-wind");

  const weatherTitleDOM = document.querySelector(".weather-title");
  ////const weatherDescriptionDOM = document.querySelector(".weather-description");

  // Lógica para o fetch do Google Maps Geocoding API
  let city = searchTerm;
  fetch(
    `http://127.0.0.1:5000/get/?search=${city}`
  )
    .then((response) => response.json())
    .then((APIdata) => {

          // Pegando dados do local
          let currentCountry = APIdata.location.country;
          let currentState = APIdata.location.region;
          let currentName = APIdata.location.name;
          let adressType = APIdata.location.adresstype;
          let tempName;

          // Pegando de clima
          let currentHour = APIdata.dt;
          let currentTimezone = APIdata.timezone;
          let currentTemp = APIdata.temperature;
          let currentFeelsLike = APIdata.feels_like;
          let currentHumidity = APIdata.humidity;
          let currentWind = APIdata.wind_speed * 3.6;
          let currentWeather = APIdata.weather.main;
          let currentWeatherDescription = APIdata.weather.description;
          let currentWeatherID = APIdata.weather.id;
          let sunrise = APIdata.sunrise;
          let sunset = APIdata.sunset;

          if (adressType == "country") {
            tempName = currentCountry;
          } else {
            tempName = currentName;
          }
          
          // Escrevendo dados no DOM
          tittleDOM.innerText = tempName;
          
          subTittleDOM.innerText = `${currentName}, ${currentState}, ${currentCountry}`;
          timeDOM.innerHTML = convertTime(
            currentHour,
            currentTimezone
          ).returnTime;
          dateDOM.innerHTML = convertTime(
            currentHour,
            currentTimezone
          ).returnDate;
          tempDOM.innerHTML = `${Math.round(currentTemp)}°C`;
          feelsLikeDOM.innerHTML = `${Math.round(currentFeelsLike)}°C`;
          umidityDOM.innerHTML = `${currentHumidity}%`;
          windDOM.innerHTML = `${Math.round(currentWind)}km/h`;
          weatherTitleDOM.innerHTML =
            currentWeatherDescription.charAt(0).toUpperCase() +
            currentWeatherDescription.slice(1);
          sunriseDOM.innerHTML = convertTime(
            sunrise,
            currentTimezone
          ).returnTime;
          sunsetDOM.innerHTML = convertTime(sunset, currentTimezone).returnTime;

          // Lógica para mudar a cor do background do ícone de temperatura
          if (currentTemp <= 26) {
            // Temperatura atual
            tempContainerI.style.background = "var(--light-primary)";
            tempContainerI.style.color = "var(--primary)";
          } else {
            tempContainerI.style.background = "var(--light-warning)";
            tempContainerI.style.color = "var(--warning)";
          }
          if (currentFeelsLike <= 26) {
            // Sensação Térmica
            tempContainerII.style.background = "var(--light-primary)";
            tempContainerII.style.color = "var(--primary)";
          } else {
            tempContainerII.style.background = "var(--light-warning)";
            tempContainerII.style.color = "var(--warning)";
          }

          // IMG do clima
          imgJS(
            currentWeather,
            currentWeatherID,
            convertTime(sunrise, currentTimezone).returnTime,
            convertTime(sunset, currentTimezone).returnTime,
            convertTime(currentHour, currentTimezone).returnTime
          );

          console.log(
            `${currentWeather} (${currentWeatherID}): ${currentWeatherDescription}`
          );
          console.table(convertTime(currentHour, currentTimezone));
          // Tempo de execução
          const end = performance.now();
          console.log(`Tempo de execução: ${end - start} ms`);
          // Lógica para o loader
          loaderContainer.style.animation = "fadeOut 0.5s forwards";
          setTimeout(() => {
            loaderContainer.style.display = "none";
            mainContainer.style.display = "block";
            mainContainer.style.animation = "fadeIn 0.5s forwards";
          }, 500);
        
    });

  // Função para converter a hora Unix para o fuso horário do local buscado
  function convertTime(unixTimestamp, timezone) {
    // Converte o timestamp Unix para milissegundos
    var date = new Date(unixTimestamp * 1000);
    // Converte para a data e hora local do usuário
    var fullDateTime = date.toLocaleString("pt-BR", { timeZone: timezone });
    // Converte para a data e hora local do usuário separadamente
    let returnTime = date.toLocaleString("pt-BR", {
      timeZone: timezone,
      timeStyle: "short",
    });
    let returnDate = date.toLocaleString("pt-BR", {
      timeZone: timezone,
      dateStyle: "full",
    });

    return { fullDateTime, returnTime, returnDate, timezone };
  }
};
