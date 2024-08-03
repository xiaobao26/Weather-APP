import axios from "axios";
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;


export const getForeCast = async (city) => {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?q=${city}&days=5&tp=24&key=${apiKey}`)
        return response.data;
    } catch (error) {
        console.log('get forecast data error:', error)
    }
};
