import React from 'react';
import { WeatherIcon } from '../../../../global/WeatherIcon/WeatherIcon';
import { SecondaryText } from '../../../../global/SecondaryText/SecondaryText';
import { TemperatureRange } from '../../../../global/TemperatureRange/TemperatureRange';
import Rian from '../../../../assets/weather_icon/Rain.png';
import London from '../../../../assets/City/London.png';
import NewYork from '../../../../assets/City/Newyork.png';
import Sydney from '../../../../assets/City/Sydney.png';
import Shanghai from '../../../../assets/City/Shanghai.png';


export const SearchHistory = () => {
    const moke = {
        range: '20 ~ 32°',
        cityname: 'London',
        icon: Rian,
    }
    return (
        <div className='col-span-4-7 row-span-5-6 flex justify-around items-center'>
            <div className="other-city bg-gradient-to-r from-history-1-sky to-history-1-floor w-1/5 h-5/6 rounded-2xl relative flex flex-col items-center justify-center">
                <img className='absolute w-full h-full z-0 opacity-20' src={London} alt="city view" />
                <div className="relative weather-icon w-14 h-14">
                    <WeatherIcon iconURL={moke.icon}/>
                </div>
                <div className="relative flex flex-col justify-center items-center">
                    <SecondaryText text={moke.cityname} color={'#fff'}/>
                    <TemperatureRange range={moke.range} color={'#fff'}/>
                </div>
            </div>

            <div className="other-city bg-gradient-to-r from-history-2-sky to-history-2-floor w-1/5 h-5/6 rounded-2xl relative flex flex-col items-center justify-center">
                <img className='absolute w-full h-full z-0 opacity-20' src={NewYork} alt="city view" />
                <div className="relative weather-icon w-14 h-14">
                    <WeatherIcon iconURL={moke.icon}/>
                </div>
                <div className="relative flex flex-col justify-center items-center">
                    <SecondaryText text={moke.cityname} color={'#fff'}/>
                    <TemperatureRange range={moke.range} color={'#fff'}/>
                </div>
            </div>

            <div className="other-city bg-gradient-to-r from-history-3-sky to-history-3-floor w-1/5 h-5/6  rounded-2xl relative flex flex-col items-center justify-center">
                <img className='absolute w-full h-full z-0 opacity-20' src={Sydney} alt="city view" />
                <div className="relative weather-icon w-14 h-14">
                    <WeatherIcon iconURL={moke.icon}/>
                </div>
                <div className="relative flex flex-col justify-center items-center">
                    <SecondaryText text={moke.cityname} color={'#fff'}/>
                    <TemperatureRange range={moke.range} color={'#fff'}/>
                </div>
            </div>

            <div className="other-city bg-gradient-to-r from-history-4-sky to-history-4-floor w-1/5 h-5/6  rounded-2xl relative flex flex-col items-center justify-center">
                <img className='absolute w-full h-full z-0 opacity-20' src={Shanghai} alt="city view" />
                <div className="relative weather-icon w-14 h-14">
                    <WeatherIcon iconURL={moke.icon}/>
                </div>
                <div className="relative flex flex-col justify-center items-center">
                    <SecondaryText text={moke.cityname} color={'#fff'}/>
                    <TemperatureRange range={moke.range} color={'#fff'}/>
                </div>
            </div>

        </div>
    )
}
