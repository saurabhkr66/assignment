
import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  if (!products.length) {
    return <p className="text-center text-gray-600">No products found.</p>;
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
