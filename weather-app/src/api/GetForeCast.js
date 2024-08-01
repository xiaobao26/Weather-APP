const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const getForeCast = async (city) => {
    return await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${city}&days=5&tp=24&key=${apiKey}`)
        .then((res) => res.json());
};