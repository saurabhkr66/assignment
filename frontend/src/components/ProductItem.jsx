
import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 bg-white">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">${product.price}</span>
          <span className="text-yellow-500">
            {product.rating} ⭐
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
