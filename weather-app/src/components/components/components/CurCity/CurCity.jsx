import React from 'react';
import curBg from '../../../../assets/background/Cloudy_day_background.png';
import { ThirdText } from '../../../../global/ThirdText/ThirdText';
import { PrimaryText } from '../../../../global/PrimaryText/PrimaryText';
import { Temperature } from '../../../../global/Temperature/Temperature';
import { TemperatureRange } from '../../../../global/TemperatureRange/TemperatureRange';
import { WeatherIcon } from '../../../../global/WeatherIcon/WeatherIcon';
import Icon from '../../../../assets/weather_icon/Cloudy.png';
import humidityIcon from '../../../../assets/meta_icon/humidity.svg';
import pmIcon from '../../../../assets/meta_icon/PM2.5.svg';
import somatosensoryTemperatureIcon from '../../../../assets/meta_icon/Somatosensory_temperature.svg';
import speedIcon from '../../../../assets/meta_icon/wind_speed.svg';

export const CurCity = ({ cityname, date, temperature, humanity, speed, pm2_5, flee_like, weathericon }) => {

    const environmentIcons = [humidityIcon, pmIcon, somatosensoryTemperatureIcon, speedIcon];
    const environmentData = [
        {value: `${humanity}%`, label: 'humanity'},
        {value: `${speed}km/h`, label:'speed'},
        {value: `${pm2_5}µg`, label:'pm2_5'},
        {value: `${flee_like}°`, label:'flee_like'},

    ]

    return (
        <div className="xl:w-72 lg:w-64 md:w-52 col-span-2-3 row-span-2-5 relative flex flex-col rounded-3xl bg-gradient-to-r from-cur-sky to-cur-floor ">
            <img className='absolute' src={curBg} alt="background image absolute" />
            <ThirdText text={date} color={'#fff'} />

            <div className='relative w-full h-full flex flex-col justify-around items-center z-10 text-white'>
                <PrimaryText text={cityname} color={'#ffff'} />
                <div className='flex flex-col w-full items-center justify-center'>
                    <Temperature temperature={temperature} />
                    <TemperatureRange range={`${temperature} ~ ${temperature + 3}°`} />
                </div>
                <WeatherIcon iconURL={weathericon} />

                <div className="infos flex items-center justify-around w-7/8 h-1/6 rounded-3xl" style={{ backgroundColor: '#F2F3FD' }}>
                    {environmentIcons.map((icon, index) => (
                        <div className="info">
                            <img className='xl:w-6 lg:w-5 md:w-4 sm:w-3' src={icon} alt={`${environmentData[index].label} icon`} />
                            <div className='text-black text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base'>{environmentData[index].value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


{/* <div className="info">
        <img src={humidityIcon} alt="humanity icon" />
        <div className='text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{humanity}%</div>
    </div>
    <div className="info">
        <img src={speedIcon} alt="humanity icon" />
        <div className='text-black'>{speed}km/h</div>
    </div>
    <div className="info">
        <img src={pmIcon} alt="humanity icon" />
        <div className='text-black'>{pm2_5}&mu;g</div>
    </div>
    <div className="info">
        <img src={somatosensoryTemperatureIcon} alt="humanity icon" />
        <div className='text-black'>{flee_like}°</div>
    </div> */}