import React from 'react'

export const SecondaryText = ({ text, color }) => {
    return (
        <h1 className='font-medium text-xl font-medium md:text-sm' style={{color: `${color}`}}>
            {text}
        </h1>
    )
}
