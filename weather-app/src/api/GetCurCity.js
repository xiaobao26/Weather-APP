const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const getCurCity = async (city) => {
    console.log('city', city);
    return await fetch(`https://api.weatherapi.com/v1/current.json?q=${city}&key=${apiKey}&aqi=yes`)
        .then((res) => res.json());
}