import React from 'react';
import curBg from '../../../../assets/background/Cloudy_day_background.png'

export const CurCity = () => {

    return (
        <div className="col-span-2-3 row-span-2-5 rounded-3xl bg-gradient-to-r from-cur-sky to-cur-floor relative">
            <img src={curBg} alt="background image absolute" />
        </div>
    );
};
