import React, { useContext } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../context/ThemeContext";

export default function CartItems({
  name,
  flags,
  population,
  region,
  capital,
  data,
}) {
  const [isDark] = useContext(ThemeContext);
  return (
    <Link to={`/${name}`} state={data}>
      <section
        className={`shadow-sm hover:scale-110 hover:shadow-md transition-colors ease-in-out  delay-300 rounded-md overflow-hidden w-[250px] h-[340px]   ${isDark ? 'bg-[#2B3945] text-white' : 'bg-white text-black'}`}
      >
        <div className="">
          <img src={flags} alt="img" className="object-cover h-40 w-full " />
        </div>
        <div className="pl-3 mb-3">
          <h3 className="font-bold text-xl py-2">{name}</h3>
          <p className="py-1">
            <b>Population: </b>
            {population}
          </p>
          <p className="py-1">
            <b>Region: </b>
            {region}
          </p>
          <p className="py-1">
            <b>Capital: </b>
            {capital}
          </p>
        </div>
      </section>
    </Link>
  );
}
