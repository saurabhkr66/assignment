
import axios from 'axios';

// Fetch Products with Pagination, Category Filter, and Search
export const getProducts = async (req, res) => {
  try {
    const { limit = 10, skip = 0, category, search } = req.query;

    
    const limitNum = parseInt(limit, 10);
    const skipNum = parseInt(skip, 10);

    if (isNaN(limitNum) || isNaN(skipNum)) {
      return res.status(400).json({ message: 'Invalid limit or skip parameter.' });
    }

    let url = '';
    if (category) {
      url = `https://dummyjson.com/products/category/${encodeURIComponent(category)}?limit=${limitNum}&skip=${skipNum}`;
    } else {
      url = `https://dummyjson.com/products?limit=${limitNum}&skip=${skipNum}`;
    }

    const response = await axios.get(url);
    let products = response.data.products;

    if (search) {
      const searchTerm = search.toLowerCase();
      products = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm)
      );
    }

    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({ message: 'Server Error: Unable to fetch products.' });
  }
};
