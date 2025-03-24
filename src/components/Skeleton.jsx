import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Skeleton = () => {
  const [isDark] = useContext(ThemeContext)
  return (
    <>
      {Array.from({ length: 12 }).map((el, i) => (
        <section
          key={i}
          className={`rounded-md overflow-hidden w-[250px] h-[340px] animate-pulse  shadow-md ${isDark? 'bg-[#2B3945]': 'bg-white'}`}
        >
          <div className="h-40 w-full bg-gray-300  rounded-md"></div>
          <div className="p-3 mb-3 ">
            <h3 className="bg-gray-300 h-6 w-3/4 rounded-md py-2 my-2"></h3>
            <p className="bg-gray-300 h-4 w-full rounded-md py-1 my-2"></p>
            <p className="bg-gray-300 h-4 w-full rounded-md py-1 my-2"></p>
            <p className="bg-gray-300 h-4 w-full rounded-md py-1 my-2"></p>
          </div>
        </section>
      ))}
    </>
  );
};

export default Skeleton;
