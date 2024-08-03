import React from 'react';
import Cloudy_day from '../../../../assets/background/Cloudy_day_background.png';
import Hail from '../../../../assets/background/Hail_background.png';
import Rain from '../../../../assets/background/Rain_background.png';
import Snow from '../../../../assets/background/Snow_background.png';
import Sunny from '../../../../assets/background/Sunny day_background.png';

export const CurcityBg = ({ weatherInfo }) => {
    const conditionMapping = {
        'Clear': Sunny,
        'sunny': Sunny,
        'thunderstorm': Hail,
        'hail': Hail,
        'Rain': Rain,
        'rain': Rain,
        'Snow': Snow,
        'snow': Snow,
        'Cloudy': Cloudy_day,
        'cloudy': Cloudy_day,
    };

    const getBgImage = (weatherInfo) => {
        for (const [condition, image] of Object.entries(conditionMapping)) {
            if (weatherInfo.includes(condition)) {
                return image;
            }
        }
        console.error('bg error not match');
        return null;
    }
    const bg = getBgImage(weatherInfo);

    return (
        <img className='absolute' src={bg} alt="background image" />
    )
}
