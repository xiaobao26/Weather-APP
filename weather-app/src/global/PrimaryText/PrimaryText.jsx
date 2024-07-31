import React from 'react'

export const PrimaryText = ({ text, color }) => {
    return (
        <h1 className='font-medium text-2xl' style={{color: `${color}`}}>
            {text}
        </h1>
    )
}
