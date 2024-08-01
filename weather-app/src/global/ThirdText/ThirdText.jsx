import React from 'react'

export const ThirdText = ({ text, color }) => {
    return (
        <h5 className='font-thin text-xs relative p-4 ' style={{color: `${color}`}}>
            {text}
        </h5>
    )
}
