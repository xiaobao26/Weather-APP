import React from 'react'

export const Date = ({ date, color }) => {
    return (
        <h5 className='font-thin text-xs relative p-4 ' style={{color: `${color}`}}>
            {date}
        </h5>
    )
}
