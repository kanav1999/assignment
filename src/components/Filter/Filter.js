// src/components/Filter.js
import React from 'react';

const Filter = ({ handleFilterChange }) => {
  return (
    <div className="filter">
      <label htmlFor="year">Year:</label>
      <input type="text" id="year" onChange={handleFilterChange} />
      
      <label htmlFor="make">Make:</label>
      <input type="text" id="make" onChange={handleFilterChange} />

      <label htmlFor="model">Model:</label>
      <input type="text" id="model" onChange={handleFilterChange} />

      <label htmlFor="price">Price:</label>
      <input type="text" id="price" onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
