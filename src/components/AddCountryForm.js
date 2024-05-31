import React, { useState } from 'react';

const AddCountryForm = ({ onAddCountry }) => {
  const [name, setName] = useState('');
  const [population, setPopulation] = useState('');
  const [continent, setContinent] = useState('');
  const [capital, setCapital] = useState('');
  const [flagUrl, setFlagUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && population && continent && capital && flagUrl) {
      onAddCountry({ name, population: parseInt(population), continent, capital, flagUrl });
      setName('');
      setPopulation('');
      setContinent('');
      setCapital('');
      setFlagUrl('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Country Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Population:</label>
        <input
          type="number"
          value={population}
          onChange={(e) => setPopulation(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Continent:</label>
        <input
          type="text"
          value={continent}
          onChange={(e) => setContinent(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Capital:</label>
        <input
          type="text"
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Link to Flag:</label>
        <input
          type="text"
          value={flagUrl}
          onChange={(e) => setFlagUrl(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Country</button>
    </form>
  );
};

export default AddCountryForm;
