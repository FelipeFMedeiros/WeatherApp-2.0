export const imgJS = (currentWeather, currentWeatherID, sunrise, sunset, currentHour) => {
  // Pegando referências do DOM
  const weatherIMGDOM = document.querySelector(".weather-img");
  let timeReference = "";
  let correctHour = parseInt(currentHour.split(":")[0]);
  let correctSunset = parseInt(sunset.split(":")[0]);
  let correctSunrise = parseInt(sunrise.split(":")[0]);
  
  // Lógica para a imagem
  if (correctHour >= correctSunset || correctHour <= correctSunrise) {
    timeReference = "night";
  } else {
    timeReference = "day";
  }

  // Colocando imagem no DOM
  if (import.meta.env.MODE === 'production') { // Ambiente de produção
    weatherIMGDOM.src = `/assets/${timeReference}/${currentWeather.toLowerCase()}-${currentWeatherID}.svg`;
  } else { // Ambiente local
    weatherIMGDOM.src = `/public/assets/${timeReference}/${currentWeather.toLowerCase()}-${currentWeatherID}.svg`;
  }

};
