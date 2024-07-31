import React from 'react';
import { useState } from 'react';

export const SearchBar = ({ cityName }) => {

    const [input, setInput] = useState('');
    
    const handleInput = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    const handleButtonClick = () => {
        cityName(input);
    }

    return (
        <div className='search-bar-container col-span-4-5 row-span-4-5' >
            <div className="flex w-full h-full items-center relative ml-4">
                <input onChange={(e) => handleInput(e)} className='px-14 py-3 rounded-2xl' placeholder='Search for a city'/>
                <button onClick={handleButtonClick} href="#" className='absolute right-2 py-2 px-2 rounded-xl text-white' style={{backgroundColor: '#5F4CDC'}}>Search</button>
            </div>
        </div>
    )
}
