const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const getDateFromIPAddress = async () => {
    return await fetch(`https://api.weatherapi.com/v1/ip.json?q=2001%3A8003%3A265a%3Ad800%3A6dd6%3A7bd7%3A49a8%3A56e3%25&key=${apiKey}`)
        .then((res) => res.json());
}
