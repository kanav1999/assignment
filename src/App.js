// src/App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CarList from './components/CarList/CarList';
import Filter from './components/Filter/Filter';
import carsData from './data/cars';

function App() {
  const [filter, setFilter] = useState({
    year: '',
    make: '',
    model: '',
    price: ''
  });
  
  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setFilter({ ...filter, [id]: value });
  };
  
  const filteredCars = carsData.filter(car => {
    return (
      car.year.includes(filter.year) &&
      car.make.toLowerCase().includes(filter.make.toLowerCase()) &&
      car.model.toLowerCase().includes(filter.model.toLowerCase()) &&
      car.price.includes(filter.price)
    );
  });

  return (
    <div className="app">
      <Navbar />
      <div className="filter-container">
        <Filter handleFilterChange={handleFilterChange} />
      </div>
      <CarList cars={filteredCars} />
    </div>
  );
}

export default App;
