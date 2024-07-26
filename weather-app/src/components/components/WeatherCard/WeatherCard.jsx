import React from 'react';

export const WeatherCard = ({ children }) => {
    return (
        <div className='col-span-2-7 row-span-2-5 grid grid-cols-card grid-rows-card rounded-3xl z-0' 
            style={{backgroundColor: '#F2F3FD'}}
        >
            {children}
        </div>
    )
}
