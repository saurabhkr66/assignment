
import axios from 'axios';

// Fetch Categories
export const getCategories = async (req, res) => {
  try {
    const response = await axios.get('https://dummyjson.com/products/categories');
    const categories = response.data; // Array of strings

    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error.message);
    res.status(500).json({ message: 'Server Error: Unable to fetch categories.' });
  }
};
