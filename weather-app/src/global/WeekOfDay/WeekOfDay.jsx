import React from 'react'

export const WeekOfDay = ({ weekofday, color }) => {
    return (
        <h1 className='font-medium text-xl font-medium' style={{color: `${color}`}}>
            {weekofday}
        </h1>
    )
}
