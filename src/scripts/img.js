export const imgJS = (currentWeather, currentWeatherID, currentHour) => {
  // Pegando referências do DOM
  const weatherIMGDOM = document.querySelector(".weather-img");
  let timeReference = "";
  let correctHour = parseInt(currentHour.split(":")[0]);
  
  // Lógica para a imagem
  if (correctHour >= 18 || correctHour <= 5) {
    timeReference = "night";
  } else {
    timeReference = "day";
  }

  // Colocando imagem no DOM
  if (import.meta.env.MODE === 'production') { // Ambiente de produção
    weatherIMGDOM.src = `/assets/${timeReference}/${currentWeather.toLowerCase()}-${currentWeatherID}.svg`;
  } else { // Ambiente local
    weatherIMGDOM.src = `/public/assets/${timeReference}/${currentWeather.toLowerCase()}-${currentWeatherID}.svg`;
    weatherIMGDOM.src = "/public/assets/night/fog-741.svg";
  }

};
