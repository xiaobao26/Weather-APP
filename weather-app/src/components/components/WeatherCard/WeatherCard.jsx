import React from 'react';

export const WeatherCard = ({ children }) => {
    return (
        <div className='col-span-2-7 row-span-2-5 grid grid-cols-card grid-rows-card rounded-3xl z-0
                        max-w-[920px] mx-auto
                        lg:max-w-xxl lg:max-h-customer-lg
                        md:max-w-xxl md: max-h-customer-lg' 
            style={{backgroundColor: '#F2F3FD'}}
        >
            {children}
        </div>
    )
}
