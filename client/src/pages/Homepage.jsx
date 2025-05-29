import React from 'react';
import { Link } from 'react-router-dom';    
import Navbar from '../components/Navbar'; 
import ProductSlider from './ProductSlider';
import Productdata from './Productdata';

const Homepage = () => {

    
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex flex-col items-center justify-center mt-20 px-4">
           <ProductSlider />

           <Productdata/>
      </main>
    </div>
  );
};

export default Homepage;
