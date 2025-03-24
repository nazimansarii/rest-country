import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function CountryDetailSekeleton() {
  const [isDark] = useContext(ThemeContext);
  return (
    <main style={{minHeight:'calc(100vh - 73px)'}} className={`max-w-[1500px] m-auto pt-4 animate-pulse ${isDark ? 'bg-[#2B3945] text-white' : 'bg-white text-black'}`}>
      <button className="flex items-center px-4 py-2  text-white rounded-md hover:bg-blue-600 ml-5 cursor-pointer">
        <div className="h-6 bg-gray-200 rounded w-24"></div>
      </button>
      <div className="mt-6 p-6 flex flex-wrap gap-6">
        <div className="w-full max-w-sm h-64 bg-gray-200 rounded-md"></div>
        <div className="flex-1">
          <div className="h-6 bg-gray-200 rounded w-32 mt-2"></div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-6 bg-gray-200 rounded w-32 mt-2"></div>
            <div className="h-6 bg-gray-200 rounded w-32 mt-2"></div>
            <div className="h-6 bg-gray-200 rounded w-32 mt-2"></div>
            <div className="h-6 bg-gray-200 rounded w-32 mt-2"></div>
            <div className="h-6 bg-gray-200 rounded w-32 mt-2"></div>
            <div className="h-6 bg-gray-200 rounded w-32 mt-2"></div>
            <div className="h-6 bg-gray-200 rounded w-32 mt-2"></div>
            <div className="h-6 bg-gray-200 rounded w-32 mt-2"></div>
          </div>
          <div className="mt-4">
            <div className="h-6 bg-gray-200 rounded w-32 mt-2"></div>
            <div className="flex flex-wrap gap-2 mt-2">
              <div className="h-6 bg-gray-200 rounded w-24 mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
