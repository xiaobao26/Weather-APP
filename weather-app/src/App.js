import './App.css';
import { Background } from './components/Background/Background';
import { WeatherCard } from './components/components/WeatherCard/WeatherCard';
import { CurCity } from './components/components/components/CurCity/CurCity';
import { ForeCast } from './components/components/components/ForeCast/ForeCast';
import { SearchBar } from './components/components/components/SearchBar/SearchBar';
import { SearchHistory } from './components/components/components/SearchHistory/SearchHistory';

import { useEffect, useState } from 'react';
import { getCurCity } from './api/GetCurCity';
import { getForeCast } from './api/GetForeCast';
import { getDateFromIPAddress} from './api/GetDateFromIPAddress';
import axios from 'axios';




function App() {
  const [flag, setFlag] = useState(true);
  const [input, setInput] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humanity, setHumanity] = useState('');
  const [speed, setSpeed] = useState('');
  const [pm2_5, setPm2_5] = useState('');
  const [flee_like, setFlee_like] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');
  const [search, setSearch] = useState(false);

  // forecast 
  const [dates, setDates] = useState([]);
  const [weatherIcons, setWeatherIcons] = useState([]);
  const [minTemperature, setMinTemperature] = useState([]);
  const [maxTemperature, setMaxTemperature] = useState([]);

  // history
  // icon, cityName, temperature
  const [history, setHistory] = useState([]);


  const handleInput = (cityname) => {
    setInput(cityname);
  }

  const handleSearch = () => {
    setCity(input);
    setSearch(preState => !preState)
  }


  const handleSearchHistory = (city, data) => {
    const newArray = [data.current.condition.icon, city, Math.round(data.current.temp_c)];
    setHistory(prevHistory => {
      const updateHistory = [newArray, ...prevHistory].slice(0, 4);
      return updateHistory;
    })
  }


  
  useEffect(() => {
    if (flag) {
      console.log(axios.isCancel('something'));
      setFlag(false);
      getDateFromIPAddress()
      .then((data) => {
        // console.log(data);
        setCity(data.city);
      })
      .catch((error) => {
        console.log(error);
      })

    }
    

    if (city) {
      // current city data
      getCurCity(city)
        .then((data) => {
          // console.log(data)
          setDate(data.location.localtime);
          setTemperature(Math.round(data.current.temp_c));
          setHumanity(data.current.humidity);
          setSpeed(Math.round(data.current.wind_kph));
          setPm2_5(data.current.air_quality.pm2_5);
          setFlee_like(Math.round(data.current.feelslike_c));
          setWeatherIcon(data.current.condition.icon);
          handleSearchHistory(city, data);
        })
        .catch((error) => {
          console.log(error)
        });
      

      getForeCast(city)
      .then((data) => {
        // console.log(data)
        setDates(data.forecast.forecastday.slice(1, 5).map((arr) => arr.date.slice(5, 10)));
        setWeatherIcons(data.forecast.forecastday.slice(1, 5).map((arr) => arr.day.condition.icon));
        setMinTemperature(data.forecast.forecastday.slice(1, 5).map((arr) => Math.round(arr.day.mintemp_c)));
        setMaxTemperature(data.forecast.forecastday.slice(1, 5).map((arr) => Math.round(arr.day.maxtemp_c)));

      })
      .catch((error) => {
        console.log(error)
      })

    }
  }, [city,search])

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
          weathericon={weatherIcon}/>

        <ForeCast
          dates={dates}
          weatherIcons={weatherIcons}
          minTemperature={minTemperature}
          maxTemperature={maxTemperature}/>

        <SearchBar 
          onInput={handleInput}
          onSearch={handleSearch}/>

        <SearchHistory 
          history={history}
        />
      </WeatherCard>
    </Background>
  );
}

export default App;

