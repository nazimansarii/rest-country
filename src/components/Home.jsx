import React, { useContext, useState } from "react";
import CartList from "./CartList";
import Search from "./Search";
import Filter from "./Filter";
import { useFilter } from "../hooks/useFilter";
import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [filteredData, setQuery] = useFilter(countries, (data) => {
    const name = data.name?.common || ""; // Safely access name.common
    const region = data.region || ""; // Safely access region
    return `${name} ${region}`; // Combine name and region for filtering
  });
  const [isDark] = useContext(ThemeContext);
  return (
    <main
      className={`max-w-[1500px] m-auto p-5 ${
        isDark ? "bg-[#202C37] text-white" : "bg-white"
      } shadow-md`}
    >
      <section className="flex  justify-between items-center mb-10 flex-wrap gap-5">
        <Search setQuery={setQuery} />
        <Filter setQuery={setQuery} />
      </section>
      <CartList setCountries={setCountries} filteredData={filteredData}  />
    </main>
  );
}
