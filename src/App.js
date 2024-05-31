import React, { useState } from 'react';
import './App.css';
import CountryList from './components/CountryList';
import AddCountryForm from './components/AddCountryForm';

function App() {
  const [countries, setCountries] = useState([
    {
      name: 'United States',
      population: 331000000,
      continent: 'North America',
      capital: 'Washington D.C.',
      flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png'
    },
    {
      name: 'France',
      population: 65273511,
      continent: 'Europe',
      capital: 'Paris',
      flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png'
    },
    {
      name: 'Germany',
      population: 83783942,
      continent: 'Europe',
      capital: 'Berlin',
      flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png'
    },
    {
      name: 'Japan',
      population: 126476461,
      continent: 'Asia',
      capital: 'Tokyo',
      flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1280px-Flag_of_Japan.svg.png'
    },
    {
      name: 'Brazil',
      population: 213993437,
      continent: 'South America',
      capital: 'Brasília',
      flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png'
    }
  ]);
  const [minPopulation, setMinPopulation] = useState(0);
  const handleAddCountry = (newCountry) => {
    setCountries([...countries, newCountry]);
  };

  const handleDeleteCountry = (index) => {
    setCountries(countries.filter((_, i) => i !== index));
  };
  const handlePopulationChange = (event) => {
    const value = event.target.value;
    setMinPopulation(value);
  };
  const filteredCountries = countries.filter(
    (country) => country.population >= parseInt(minPopulation)
  );

  return (
    <div className="container">
      <header>
        <h1>World flags</h1>
      </header>
      <AddCountryForm onAddCountry={handleAddCountry} />
      <div className="filter-container">
        <label>Filter:</label>
        <input
          type="number"
          value={minPopulation}
          onChange={handlePopulationChange}
        />
      </div>
      <CountryList countries={filteredCountries} onDeleteCountry={handleDeleteCountry} />
    </div>
  );
}

export default App;
