import React from 'react';
import { useState } from 'react';

export const SearchBar = ({ onInput, onSearch }) => {


    
    const handleInput = (e) => {
        e.preventDefault();
        const city = e.target.value
        onInput(city);
    }

    const handleButtonClick = () => {
        onSearch();
    }

    return (
        <div className='search-bar-container col-span-4-5 row-span-4-5' >
            <div className="flex w-full h-full items-center relative ml-4">
                <input onChange={(e) => handleInput(e)} className='xl:px-16 py-3 rounded-2xl lg:px-14 md:px-8' placeholder='Search for a city'/>
                <button onClick={handleButtonClick} href="#" className='absolute right-2 md:py-1 md:px-1 py-2 px-2 rounded-xl text-white' style={{backgroundColor: '#5F4CDC'}}>Search</button>
            </div>
        </div>
    )
}
