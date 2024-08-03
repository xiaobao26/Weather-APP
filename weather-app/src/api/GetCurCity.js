import axios from "axios";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const getCurCity = async (city) => {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?q=${city}&key=${apiKey}&aqi=yes`);
        return response.data;
    } catch (error) {
        console.log('search current city api error:', error);
    }
    
}
