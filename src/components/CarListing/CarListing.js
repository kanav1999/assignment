// src/components/CarListing/CarListing.js
import React from 'react';
import './CarListing.css';

const CarListing = ({ car }) => {
  return (
    <div className="car-listing">
      <img src={car.image} alt={`${car.year} ${car.make} ${car.model}`} />
      <div className="details">
        <p>Year: {car.year} <br/>Make: {car.make}<br/> Model: {car.model}</p>
        <p>Price: ${car.price}</p>
      </div>
    </div>
  );
};

export default CarListing;
