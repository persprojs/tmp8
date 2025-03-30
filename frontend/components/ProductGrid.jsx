import React, { useState, useEffect, useContext } from 'react';
import { API_BASE_URL } from '../config/config';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import '../assets/ProductGrid.css';

const ProductGrid = ({ selectedCategory, selectedSubcategory }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('Fetching products with category:', selectedCategory, 'and subcategory:', selectedSubcategory);
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/products`, {
          params: {
            category: selectedCategory,
            subcategory: selectedSubcategory,
          },
        });
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
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



/* 16 Mar 25
import React, { useState, useEffect, useContext } from 'react';
import { API_BASE_URL } from '../config/config';
import axios from 'axios';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { CartContext } from './CartContext';
import '../assets/ProductGrid.css';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container className="product-grid-container">
      <Row className="g-3">
        {products.map((product) => (
          <Col key={product.id} sm={6} md={4} lg={3} className="product-col">
            <Card className="product-card">
              <Card.Img variant="top" src={product.Images} className="product-img" />
              <Card.Body>
                <Card.Title className="product-title">{product.Title}</Card.Title>
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductGrid;
*/