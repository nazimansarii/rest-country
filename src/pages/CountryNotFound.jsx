import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function CountryNotFound() {
  const [isDark] = useContext(ThemeContext)
  return (
    <div style={{minHeight:'calc(100vh - 73px)'}} className={`flex flex-col items-center justify-center min-h-screen ${isDark? 'bg-[#2B3945] text-white' : 'bg-white text-black'}`}>
      <h1 className="text-4xl font-bold mb-4">Country Not Found</h1>
      <p className="text-lg mb-6 text-center">
        Sorry, we couldn't find the country you were looking for.
      </p>
      <button
        onClick={() => history.back()}
        className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200 cursor-pointer"
      >
        Go Back
      </button>
    </div>
  );
}
