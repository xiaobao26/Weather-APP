import React from 'react';
import { ThirdText } from '../../../../global/ThirdText/ThirdText';
import { SecondaryText } from '../../../../global/SecondaryText/SecondaryText';
import { WeatherIcon } from '../../../../global/WeatherIcon/WeatherIcon';
import Rain from '../../../../assets/weather_icon/Rain.png';
import { TemperatureRange } from '../../../../global/TemperatureRange/TemperatureRange';

export const ForeCast = ({ dates, weatherIcons, minTemperature, maxTemperature }) => {

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const getDaysOfWeek = (dateString) => {
        const date = new Date(dateString);
        return daysOfWeek[date.getDay()];
    }

    const moke = {
        color: '#45426B',

    }

    return (
        <div className='forecast-container flex justify-around col-span-4-7 row-span-2-4'>
            {console.log(dates.length)}
            {dates.map((date, index) => (
                <div key={index} className="infos flex flex-col items-center justify-center">
                    <div className="row flex flex-col justify-center items-center">
                        <SecondaryText text={getDaysOfWeek(date)} color={moke.color} />
                        <ThirdText text={dates[index]} color={moke.color} />
                    </div>
                    <div className="row flex flex-col justify-center items-center">
                        <WeatherIcon iconURL={weatherIcons[index]} />
                        <TemperatureRange range={`${minTemperature[index]} ~ ${maxTemperature[index]}°`} color={moke.color} />
                    </div>
                </div>
        ))}
        </div>
    )
}
