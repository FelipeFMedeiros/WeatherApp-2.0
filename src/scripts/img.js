export const imgJS = (currentWeather, currentHour) => {
  // Pegando referências do DOM
  const weatherIMGDOM = document.querySelector(".weather-img");
  let timeReference = "";
  let correctHour = parseInt(currentHour.split(":")[0]);
  console.log(
    "Hora recebida: " + currentHour + "\nHora corrigida: " + correctHour
  );
  // Lógica para a imagem
  if (correctHour >= 18 || correctHour <= 5) {
    timeReference = "night";
  } else {
    timeReference = "day";
  }

  // Colocando imagem no DOM
  if (import.meta.env.MODE === 'production') { // Ambiente de produção
    weatherIMGDOM.src = `/assets/${timeReference}/${currentWeather.toLowerCase()}.svg`;
  } else { // Ambiente local
    weatherIMGDOM.src = `/public/assets/${timeReference}/${currentWeather.toLowerCase()}.svg`;
  }

};
