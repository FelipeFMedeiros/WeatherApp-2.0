export const indexJS = (searchTerm) => {
    const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
    const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const TIMEZONE_API_KEY = import.meta.env.VITE_TIMEZONE_API_KEY;
  
    window.alert(`Pesquisando por: ${searchTerm}`);
  }