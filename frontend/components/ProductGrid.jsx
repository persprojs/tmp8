import React, { useState, useEffect, useContext } from 'react';
import { API_BASE_URL } from '../config/config';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import '../assets/ProductGrid.css';

const ProductGrid = ({ selectedCategory, selectedSubcategory }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(`[FRONTEND] Fetching products with category: ${selectedCategory}, and subcategory: ${selectedSubcategory}`);
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/products`, {
          params: {
            category: selectedCategory,
            subcategory: selectedSubcategory,
          },
        });
        console.log(`[FRONTEND] Products fetched:`, response.data.products);  // Log products
        setProducts(response.data.products);
      } catch (error) {
        console.error('[FRONTEND] Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [selectedCategory, selectedSubcategory]);

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.Title}</h3>
          <p>{product.Price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
