import React from 'react';
import { WeatherIcon } from '../../../../global/WeatherIcon/WeatherIcon';
import { SecondaryText } from '../../../../global/SecondaryText/SecondaryText';
import { TemperatureRange } from '../../../../global/TemperatureRange/TemperatureRange';
import London from '../../../../assets/City/London.png';
import NewYork from '../../../../assets/City/Newyork.png';
import Sydney from '../../../../assets/City/Sydney.png';
import Shanghai from '../../../../assets/City/Shanghai.png';


export const SearchHistory = ({ history }) => {

    const backgrounds = [London, NewYork, Sydney, Shanghai];

    return (
        <div className='col-span-4-7 row-span-5-6 flex justify-around items-center'>
            {backgrounds.map((bg, index) => {
                const historyInfo = history[index];
                const isHistoryInfoAvailable = historyInfo !== undefined;

                return (
                        <div key={index} className="other-city bg-gradient-to-r from-history-1-sky to-history-1-floor w-1/5 h-5/6 rounded-2xl relative flex flex-col items-center justify-center">
                            <img className='absolute w-full h-full z-0 opacity-20' src={bg} alt="city view" />
                            {isHistoryInfoAvailable ? (
                                <>
                                    <div className="relative weather-icon w-14 h-14 lg:max-h-8 lg:max-w-12 md:max-h-10 md:max-w-12">
                                        <WeatherIcon iconURL={historyInfo[0]} />
                                    </div>
                                    <div className="relative flex flex-col justify-center items-center">
                                        <SecondaryText text={historyInfo[1]} color={'#fff'} />
                                        <TemperatureRange range={`${historyInfo[2]} ~ ${historyInfo[2] + 3}°`} color={'#fff'} />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <SecondaryText text={'Empty'} color={'#fff'} />
                                    <TemperatureRange range={'No data'} color={'#fff'} />
                                </>
                            )}
                        </div>
                )
            })}
        </div>
    )
}

