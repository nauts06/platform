import React from "react";
import { products } from "../data/products";

const Productdata = () => {
  return (
    <div className="w-full px-4 py-8 bg-gray-100">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
        Explore Our Clothing Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <div className="h-48 bg-gray-200 flex items-center justify-center rounded">
  {product.image ? (
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-full object-contain"
    />
  ) : (
    <span className="text-gray-500">Image Placeholder</span>
  )}
</div>

            <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
            <div className="mt-2 font-bold text-green-600">{product.price}</div>
            <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productdata;
