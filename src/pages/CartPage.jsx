import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router";
import CountryDetailSekeleton from "../components/CountryDetailSekeleton";
import CountryNotFound from "./CountryNotFound";
import { ThemeContext } from "../context/ThemeContext";

export default function CountryDetail() {
  const countryName = useParams().cart;
  const [countryDetail, setCountryDetail] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [isDark] = useContext(ThemeContext);

  const { state } = useLocation();

  const updateDate = (data) => {
    setCountryDetail({
      name: data.name.common,
      flag: data.flags.svg,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population.toLocaleString("en-IN"),
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital,
      tld: data.tld,
      currencies: Object.values(data.currencies)
        .map((currencies) => currencies.name)
        .join(", "),
      symbol: Object.values(data.currencies).map((symbol) => symbol.symbol),
      languages: Object.values(data.languages).join(", "),
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([countryData]) => countryData.name.common);
      })
    ).then((borders) => {
      setTimeout(() =>
        setCountryDetail((prevState) => ({ ...prevState, borders }))
      );
    });
  };

  useEffect(() => {
    if (state) {
      updateDate(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateDate(data);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return <CountryNotFound />;
  }

  return countryDetail === null ? (
    <CountryDetailSekeleton />
  ) : (
    <main style={{minHeight:'calc(100vh - 73px)'}} className={`max-w-[1500px]  m-auto pt-4 ${isDark ? 'bg-[#202C37] text-white' : ''}`}>
      <button
        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ml-5 cursor-pointer"
        onClick={() => history.back()}
      >
        <i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back
      </button>
      <div className="mt-6 p-6 flex flex-wrap gap-6">
        <div className="w-full sm:w-1/2 sm:h-90  overflow-hidden  rounded-md">
          <img
            src={countryDetail.flag}
            alt={`${countryDetail.name} flag`}
            className="w-full h-full object-contain "
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-blue-600">
            {countryDetail.name}
          </h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <p>
              <b>Native Name: </b>
              <span>{countryDetail.nativeName}</span>
            </p>
            <p>
              <b>Population: </b>
              <span>{countryDetail.population}</span>
            </p>
            <p>
              <b>Region: </b>
              <span>{countryDetail.region}</span>
            </p>
            <p>
              <b>Sub Region: </b>
              <span>{countryDetail.subRegion}</span>
            </p>
            <p>
              <b>Capital: </b>
              <span>{countryDetail.capital}</span>
            </p>
            <p>
              <b>Top Level Domain: </b>
              <span>{countryDetail.tld}</span>
            </p>
            <p>
              <b>Currencies: </b>
              <span>{countryDetail.currencies}</span>&nbsp;
              <span>{countryDetail.symbol}</span>
            </p>
            <p>
              <b>Languages: </b>
              <span>{countryDetail.languages}</span>
            </p>
          </div>
          {countryDetail.borders.length !== 0 && (
            <div className="mt-4">
              <p>
                <b>Border Countries: </b>
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {countryDetail.borders.map((border) => (
                  <Link
                    key={border}
                    to={`/${border}`}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    {border}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
