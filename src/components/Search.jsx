import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Search({ setQuery }) {
  const [isDark] = useContext(ThemeContext);
  return (
    <div
      className={` px-3 py-2 rounded-md max-w-[300px] w-[300px] relative flex ${isDark ? 'shadow-cyan-100 shadow-sm' :'shadow-gray-200 shadow-sm' } `}
    >
      <i className="fa-solid fa-magnifying-glass text-gray-300 absolute top-3"></i>
      <input
        type="text"
        className="w-full text-gray-500 ml-4 px-3 outline-none"
        placeholder="Search for a country..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    </div>
  );
}
