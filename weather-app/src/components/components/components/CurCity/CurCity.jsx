import React from 'react';
import curBg from '../../../../assets/background/Cloudy_day_background.png';
import { Date } from '../../../../global/Date/Date';
import { CityName } from '../../../../global/CityName/CityName';
import { Temperature } from '../../../../global/Temperature/Temperature';
import { TemperatureRange } from '../../../../global/TemperatureRange/TemperatureRange';
import { WeatherIcon } from '../../../../global/WeatherIcon/WeatherIcon';
import Icon from '../../../../assets/weather_icon/Cloudy.png';
import humidityIcon from '../../../../assets/meta_icon/humidity.svg';
import pmIcon from '../../../../assets/meta_icon/PM2.5.svg';
import somatosensoryTemperatureIcon from '../../../../assets/meta_icon/Somatosensory_temperature.svg';
import speedIcon from '../../../../assets/meta_icon/wind_speed.svg';

export const CurCity = () => {
    const moke = {
        date: '23 July, Sunday 2022',
        cityname: 'London',
        temperature: '20°',
        range: '20 ~ 23°',
        humanity: '85%',
        speed: '9km/h',
        pm2_5: '75',
        flee_like: '26°',
        icon: Icon,
    }

    return (
        <div className="col-span-2-3 row-span-2-5 relative flex flex-col rounded-3xl bg-gradient-to-r from-cur-sky to-cur-floor ">
            <img className='absolute' src={curBg} alt="background image absolute" />
            <Date date={moke.date} color={'#fff'}/>
            
            <div className='relative w-full h-full flex flex-col justify-around items-center z-10 text-white'>
                <CityName cityName={moke.cityname} color={'#ffff'}/>
                <div className='flex flex-col w-full items-center justify-center'>
                    <Temperature temperature={moke.temperature}/>
                    <TemperatureRange range={moke.range} />
                </div>
                <WeatherIcon iconURL={moke.icon} />

                <div className="infos flex items-center justify-around w-7/8 h-1/6 rounded-3xl" style={{backgroundColor: '#F2F3FD'}}>
                    <div className="info">
                        <img src={humidityIcon} alt="humanity icon" />
                        <div className='text-black'>{moke.humanity}</div>
                    </div>
                    <div className="info">
                        <img src={speedIcon} alt="humanity icon" />
                        <div className='text-black'>{moke.speed}</div>
                    </div>
                    <div className="info">
                        <img src={pmIcon} alt="humanity icon" />
                        <div className='text-black'>{moke.pm2_5}&mu;g</div>
                    </div>
                    <div className="info">
                        <img src={somatosensoryTemperatureIcon} alt="humanity icon" />
                        <div className='text-black'>{moke.flee_like}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
