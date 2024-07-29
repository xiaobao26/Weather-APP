import React from 'react';
import { Date } from '../../../../global/Date/Date';
import { WeekOfDay } from '../../../../global/WeekOfDay/WeekOfDay';
import { WeatherIcon } from '../../../../global/WeatherIcon/WeatherIcon';
import Rain from '../../../../assets/weather_icon/Rain.png';
import { TemperatureRange } from '../../../../global/TemperatureRange/TemperatureRange';

export const ForeCast = () => {
    const moke = {
        date: '24 July',
        color: '#45426B',
        icon: Rain,
        range: '20 ~ 25°',
    }

    return (
        <div className='forecast-container flex justify-around col-span-4-7 row-span-2-4'>
            <div className="infos flex flex-col items-center justify-center">
                <div className="row">
                    <WeekOfDay weekofday={'Monday'} color={moke.color}/>
                    <Date date={moke.date} color={moke.color}/>
                </div>
                <div className="row flex flex-col justify-center items-center">
                    <WeatherIcon iconURL={moke.icon}/>
                    <TemperatureRange range={moke.range} color={moke.color}/>
                </div>
            </div>

            <div className="infos flex flex-col items-center justify-center">
                <div className="row">
                    <WeekOfDay weekofday={'Monday'} color={moke.color}/>
                    <Date date={moke.date} color={moke.color}/>
                </div>
                <div className="row flex flex-col justify-center items-center">
                    <WeatherIcon iconURL={moke.icon}/>
                    <TemperatureRange range={moke.range} color={moke.color}/>
                </div>
                
            </div>

            <div className="infos flex flex-col items-center justify-center">
                <div className="row">
                    <WeekOfDay weekofday={'Monday'} color={moke.color}/>
                    <Date date={moke.date} color={moke.color}/>
                </div>
                <div className="row flex flex-col justify-center items-center">
                    <WeatherIcon iconURL={moke.icon}/>
                    <TemperatureRange range={moke.range} color={moke.color}/>
                </div>
                
            </div>

            <div className="infos flex flex-col items-center justify-center">
                <div className="row">
                    <WeekOfDay weekofday={'Monday'} color={moke.color}/>
                    <Date date={moke.date} color={moke.color}/>
                </div>
                <div className="row flex flex-col justify-center items-center">
                    <WeatherIcon iconURL={moke.icon}/>
                    <TemperatureRange range={moke.range} color={moke.color}/>
                </div>
                
            </div>
            
        </div>
    )
}
