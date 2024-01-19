const start = performance.now();
import { imgJS } from "./img.js";

export const indexJS = (searchTerm) => {
  // Pegando APIs do .env
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  ////const TIMEZONE_API_KEY = import.meta.env.VITE_TIMEZONE_API_KEY;

  // Pegando referências do DOM
  const tittleDOM = document.querySelector(".tittle-location-name");
  const subTittleDOM = document.querySelector(".subtittle-formated-address");
  const timeDOM = document.querySelector(".time-container");
  const dateDOM = document.querySelector(".date-container");
  const sunriseDOM = document.querySelector(".sunrise-text")
  const sunsetDOM = document.querySelector(".sunset-text");

  const tempContainerI = document.querySelector(".content main .insights div:nth-child(1) li .bx");
  const tempContainerII = document.querySelector(".content main .insights div:nth-child(2) li .bx");

  const tempDOM = document.querySelector(".local-temp");
  const feelsLikeDOM = document.querySelector(".local-feels-like");
  const umidityDOM = document.querySelector(".local-umidity");
  const windDOM = document.querySelector(".local-wind");

  const weatherTitleDOM = document.querySelector(".weather-title");
  ////const weatherDescriptionDOM = document.querySelector(".weather-description");

  // Lógica para o fetch do Google Maps Geocoding API
  let city = searchTerm;
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GOOGLE_API_KEY}`
  )
    .then((response) => response.json())
    .then((dataLocation) => {
      // Tratamento de erro
      if (dataLocation.status != "OK") {
        console.log("Erro em Google Geocoding API.");
        if (dataLocation.status == "ZERO_RESULTS") {
          alert("Nenhum resultado encontrado. Tente novamente.");
        }
        throw new Error(
          `${dataLocation.status}\n${dataLocation.error_message}`
        );
      }

      // Pegando dados da GeoCoding
      let lat = dataLocation.results[0].geometry.location.lat;
      let lng = dataLocation.results[0].geometry.location.lng;
      console.log(`SearchTerm: ${city}:\nLatitude: ${lat} | Longitude: ${lng}`);

      // Lógica para o fetch do OpenWeatherMap One Call API
      fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&units=metric&lang=pt_br&exclude=minutely,hourly,daily&appid=${WEATHER_API_KEY}`
      )
        .then((response) => response.json())
        .then((dataWeather) => {
          // Tratamento de erro
          if (dataWeather.cod) {
            console.log("Erro em OpenWeatherMap One Call API.");
            throw new Error(`${dataWeather.cod}\n${dataWeather.message}`);
          }

          // Pegando dados da GeoCoding
          let formatedAdress = dataLocation.results[0].formatted_address;

          // Pegando dados da OpenWeatherMap
          let currentHour = dataWeather.current.dt;
          let currentTimezone = dataWeather.timezone;
          let currentTemp = dataWeather.current.temp;
          let currentFeelsLike = dataWeather.current.feels_like;
          let currentHumidity = dataWeather.current.humidity;
          let currentWind = (dataWeather.current.wind_speed) * 3.6;
          let currentWeather = dataWeather.current.weather[0].main;
          let currentWeatherDescription = dataWeather.current.weather[0].description;
          let currentWeatherID = dataWeather.current.weather[0].id;
          let sunrise = dataWeather.current.sunrise;
          let sunset = dataWeather.current.sunset;

          // Escrevendo dados no DOM
          tittleDOM.innerText = getMainAddress(dataLocation.results[0].address_components);
          subTittleDOM.innerText = formatedAdress;
          timeDOM.innerHTML = convertTime(currentHour, currentTimezone).returnTime;
          dateDOM.innerHTML = convertTime(currentHour, currentTimezone).returnDate;
          tempDOM.innerHTML = `${Math.round(currentTemp)}°C`;
          feelsLikeDOM.innerHTML = `${Math.round(currentFeelsLike)}°C`;
          umidityDOM.innerHTML = `${currentHumidity}%`;
          windDOM.innerHTML = `${Math.round(currentWind)}km/h`;
          weatherTitleDOM.innerHTML = currentWeatherDescription.charAt(0).toUpperCase() + currentWeatherDescription.slice(1);
          sunriseDOM.innerHTML = convertTime(sunrise, currentTimezone).returnTime;
          sunsetDOM.innerHTML = convertTime(sunset, currentTimezone).returnTime;

          // Lógica para mudar a cor do background do ícone de temperatura
          if (currentTemp <= 26) { // Temperatura atual
            tempContainerI.style.background = "var(--light-primary)";
            tempContainerI.style.color = "var(--primary)";
          } else {
            tempContainerI.style.background = "var(--light-warning)";
            tempContainerI.style.color = "var(--warning)";
          }
          if (currentFeelsLike <= 26) { // Sensação Térmica
            tempContainerII.style.background = "var(--light-primary)";
            tempContainerII.style.color = "var(--primary)"; 
          } else {
            tempContainerII.style.background = "var(--light-warning)";
            tempContainerII.style.color = "var(--warning)";
          }
          
          // IMG do clima
          imgJS(currentWeather, currentWeatherID, convertTime(sunrise, currentTimezone).returnTime, convertTime(sunset, currentTimezone).returnTime, convertTime(currentHour, currentTimezone).returnTime);

          console.log(`${currentWeather} (${currentWeatherID}): ${currentWeatherDescription}`);
          console.table(convertTime(currentHour, currentTimezone));
          // Tempo de execução
          const end = performance.now();
          console.log(`Tempo de execução: ${end - start} ms`);
        });
    });

  // Função para gerenciar locais buscados
  function getMainAddress(addressComponents) {
    for (let i = 0; i < addressComponents.length; i++) {
      const component = addressComponents[i];
      if (!["postal_code", "street_number"].includes(component.types[0])) {
        return component.long_name;
      }
    }
  }
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
