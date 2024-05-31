import React from 'react';

const CountryList = ({ countries, onDeleteCountry }) => {
  return (
    <div>
      <h2>Country List</h2>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            <img src={country.flagUrl} alt={`${country.name} flag`} />
            <div>
              <strong>{country.name}</strong>
              <p>Population: {country.population.toLocaleString()}</p>
              <p>Continent: {country.continent}</p>
              <p>Capital: {country.capital}</p>
            </div>
            <button onClick={() => onDeleteCountry(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
