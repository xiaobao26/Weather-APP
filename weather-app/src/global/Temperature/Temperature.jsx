import React from 'react'

export const Temperature = ({ temperature }) => {
    return (
        <div className='text-6xl font-normal'>
            {temperature}°
        </div>
    )
}
