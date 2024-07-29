import React from 'react'

export const CityName = ({ cityName, color }) => {
    return (
        <h1 className='font-medium text-2xl' style={{color: `${color}`}}>
            {cityName}
        </h1>
    )
}
