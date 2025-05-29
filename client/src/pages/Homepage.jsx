import React from 'react';
import { Link } from 'react-router-dom';    
import Navbar from '../components/Navbar'; 

const Homepage = () => {

    
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex flex-col items-center justify-center mt-20 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Welcome to the E-Commerce App
        </h1>
        <p className="text-gray-600 text-lg mb-8 text-center max-w-xl">
          Discover the latest trends and deals. Please register or login to start shopping.
        </p>
        <div className="flex space-x-4">
          <Link
            to="/register"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded shadow"
          >
            Login
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
