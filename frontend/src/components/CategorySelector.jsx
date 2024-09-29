
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/actions/categoryAction';
import { fetchProducts } from '../redux/actions/productActions';

const CategorySelector = ({ selectedCategory, setSelectedCategory }) => {
  const dispatch = useDispatch();
  const categoryState = useSelector(state => state.categories);
  const { loading, categories, error } = categoryState;

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  
  console.log('Categories:', categories);

  const handleChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    dispatch(fetchProducts({ category, limit: 10, skip: 0, search: '' }));
  };

  return (
    <div className="mb-4">
      <label htmlFor="category" className="block text-gray-700 mb-2">Filter by Category:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Categories</option>
        {loading && <option disabled>Loading...</option>}
        {error && <option disabled>Error loading categories</option>}
        {!loading && !error && Array.isArray(categories) && categories.map((cat, index) => (
          typeof cat === 'string' ? (
            <option key={index} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ) : cat.name ? (
            <option key={index} value={cat.name}>
              {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
            </option>
          ) : null
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
