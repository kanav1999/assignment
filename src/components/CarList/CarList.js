// src/components/CarList/CarList.js
import React from 'react';
import CarListing from '../CarListing/CarListing';
import './CarList.css';

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      {cars.map((car, index) => (
        <CarListing key={index} car={car} />
      ))}
    </div>
  );
};

export default CarList;
