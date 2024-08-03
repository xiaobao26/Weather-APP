import React from 'react';
import cloud  from '../../assets/background.png'

export const Background = ({ children }) => {
    return (
        <div className='h-screen w-screen 
                        relative 
                        grid grid-cols-container grid-rows-container 
                        bg-gradient-to-r from-sky to-floor'
        >
            <img className='absolute right-0 bottom-0' src={cloud} alt="#" />
            {children}
        </div>
    )
}
