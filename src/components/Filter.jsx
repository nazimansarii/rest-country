import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Filter({ setQuery }) {
  const [isDark] = useContext(ThemeContext);
  return (
    <select
      className={` md:px-5 px-0 md:text-md text-sm py-3 rounded-md ${
        isDark ? "shadow-cyan-200 shadow " : "shadow"
      }`}
      onChange={(e) => setQuery(e.target.value.toLowerCase())}
    >
      <option className="theme" value="Filter by region" hidden>
        Filter by region
      </option>
      <option className={`${isDark? 'bg-[#2B3945]' :'bg-white'}`} value="Africa">
        Africa
      </option>
      <option className={`${isDark? 'bg-[#2B3945]' :'bg-white'}`} value="Americas">
        Americas
      </option>
      <option className={`${isDark? 'bg-[#2B3945]' :'bg-white'}`} value="Asia">
        Asia
      </option>
      <option className={`${isDark? 'bg-[#2B3945]' :'bg-white'}`} value="Europe">
        Europe
      </option>
      <option className={`${isDark? 'bg-[#2B3945]' :'bg-white'}`} value="Oceania">
        Oceania
      </option>
    </select>
  );
}
