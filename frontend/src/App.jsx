
import React, { useState } from 'react';
import Layout from './components/Layout';
import CategorySelector from './components/CategorySelector';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import LoadMoreButton from './components/LoadMoreButton';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './redux/actions/productActions';

const App = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(state => state.products);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleLoadMore = () => {
    dispatch(fetchProducts({ category: selectedCategory, limit: 10, skip: products.length, search: searchTerm }));
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-center">Items</h1>

      {/* Category Selection */}
      <CategorySelector 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />

      {/* Search Input */}
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />

      {/* Product Listing */}
      {error && <p className="text-center text-red-500 mb-4">{error}</p>}
      <ProductList products={products} />

      {/* Load More Button */}
      {products.length >= 10 && (
        <LoadMoreButton onClick={handleLoadMore} loading={loading} />
      )}

      {/* Limitations as Comments */}
      {/*
        Limitations:
        1. UI Pagination: Currently uses a "Load More" button instead of traditional pagination controls.
        2. Infinite Scrolling: Not implemented, which could enhance user experience for loading products seamlessly.
        3. Error Handling: Basic error messages are displayed; more detailed user feedback can be implemented.
        4. Performance: Fetching large datasets in batches might still lead to performance issues on slower networks.
        5. Search Functionality: Currently basic; advanced search features like debouncing or fuzzy search can be added.
      */}
    </Layout>
  );
};

export default App;
