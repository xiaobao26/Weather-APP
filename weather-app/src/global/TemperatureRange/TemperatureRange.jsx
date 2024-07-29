import React from 'react'

export const TemperatureRange = ({ range, color }) => {
    return (
        <div className='text-xs' style={{color: `${color}`}}>
            {range}
        </div>
    )
}
