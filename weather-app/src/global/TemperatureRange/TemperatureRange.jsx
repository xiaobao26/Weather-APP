import React from 'react'

export const TemperatureRange = ({ range, color }) => {
    return (
        <div className='text-xs md:text-[8px]' style={{color: `${color}`}}>
            {range}
        </div>
    )
}
