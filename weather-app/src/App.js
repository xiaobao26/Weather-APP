import './App.css';
import { Background } from './components/Background/Background';
import { WeatherCard } from './components/components/WeatherCard/WeatherCard';
import { CurCity } from './components/components/components/CurCity/CurCity';
import { ForeCast } from './components/components/components/ForeCast/ForeCast';
import { SearchBar } from './components/components/components/SearchBar/SearchBar';
import { SearchHistory } from './components/components/components/SearchHistory/SearchHistory';

import { useEffect, useState } from 'react';
import { getCurCity } from './api/GetCurCity';


function App() {
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humanity, setHumanity] = useState('');
  const [speed, setSpeed] = useState('');
  const [pm2_5, setPm2_5] = useState('');
  const [flee_like, setFlee_like] = useState('');
  const [weathericon, setWeathericon] = useState('');

  const handleCityName = (cityName) => {
    setCity(cityName);
  }


  useEffect(() => {
    if (city) {
      // current city data
      getCurCity(city)
        .then((data) => {
          console.log(data)
          setDate(data.location.localtime);
          setTemperature(data.current.temp_c);
          setHumanity(data.current.humidity);
          setSpeed(Math.round(data.current.wind_kph));
          setPm2_5(data.current.air_quality.pm2_5);
          setFlee_like(Math.round(data.current.feelslike_c));
          setWeathericon(data.current.condition.icon);
          console.log(data.condition.icon);
          
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [city])

  return (
    <Background>
      <WeatherCard>
        <CurCity
          cityname={city}
          date={date}
          temperature={temperature}
          humanity={humanity}
          speed={speed}
          pm2_5={pm2_5}
          flee_like={flee_like}
          weathericon={weathericon}

        />
        <ForeCast />
        <SearchBar cityName={handleCityName} />
        <SearchHistory />
      </WeatherCard>
    </Background>
  );
}

export default App;

