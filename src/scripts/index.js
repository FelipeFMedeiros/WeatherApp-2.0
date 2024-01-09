export const indexJS = (searchTerm) => {
  // Pegando APIs do .env
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  //const TIMEZONE_API_KEY = import.meta.env.VITE_TIMEZONE_API_KEY;

  // Pegando referências do DOM
  const tittle = document.querySelector(".tittle-location-name");
  const subTittle = document.querySelector(".subtittle-formated-address");

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

          // Função para pegar o endereço principal
          function getMainAddress(addressComponents) {
            for (let i = 0; i < addressComponents.length; i++) {
              const component = addressComponents[i];
              if (
                !["postal_code", "street_number"].includes(component.types[0])
              ) {
                return component.long_name;
              }
            }
          }
          tittle.innerText = getMainAddress(
            dataLocation.results[0].address_components
          );

          subTittle.innerText = formatedAdress;
        });
    });
};
