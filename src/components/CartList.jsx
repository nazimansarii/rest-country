import React, { useEffect, useState } from "react";
import CartItems from "./CartItems";
import Skeleton from "./Skeleton";
import ErrorPage from "../pages/ErrorPage";

export default function CartList({filteredData, setCountries}) {

  const [error, setError] = useState(false);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  if (error) {
    return <ErrorPage />;
  }
  return (
    <section style={{minHeight:'calc(100vh - 193px)'}} className="flex flex-wrap gap-10 items-center justify-evenly  ">
      {filteredData.length === 0 ? (
        <Skeleton />
      ) : (
        filteredData.map((country) => (
          <CartItems
            key={country.name.common}
            name={country.name.common}
            flags={country.flags.svg}
            population={country.population.toLocaleString("en-IN")}
            region={country.region}
            capital={country.capital}
            data={country}
          />
        ))
      )}
    </section>
  );
}
