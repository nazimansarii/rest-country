import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const [isDark, setIsDark] = useContext(ThemeContext);
  return (
    <header
      className={`max-w-[1500px] m-auto  ${
        isDark ? "bg-[#2B3945] text-white" : "bg-white"
      } `}
    >
      <div className="flex items-center justify-between p-5">
        <h1 className="text-xl md:text-2xl font-bold">Where in the world?</h1>
        <button
          className="cursor-pointer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDark", !isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>
          &nbsp;&nbsp;<span>{isDark ? "Light" : "Dark"} Mode</span>
        </button>
      </div>
    </header>
  );
}
