import React, { useState, useEffect, useContext } from 'react';
import { API_BASE_URL } from '../config/config';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';
import { Button } from 'react-bootstrap';
import '../assets/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  // Scroll to the top of the page when the component mounts or updates
  useEffect(() => {
    window.scrollTo(0, 150); // Scroll to the top of the page
  }, [id]); // Dependency on `id` ensures it runs whenever the product ID changes

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const url = `${API_BASE_URL}/products/${id}`;  // Updated endpoint
        console.log('Fetching product from:', url);
        console.log('Product ID:', id);
        const response = await axios.get(url);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error.response ? error.response.data : error.message);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = (variant, variantPrice) => {
    if (!product) return;
    const variantProduct = {
      ...product,
      id: `${product.id}-${variant}`,
      Title: `${product.Title} - ${variant}`,
      Price: variantPrice,
      quantity: quantity,
    };
    addToCart(variantProduct);
  };

  const handleAddToCartWithoutVariant = () => {
    if (!product) return;
    const productWithoutVariant = {
      ...product,
      Price: product.Price || 0,
      quantity: quantity,
    };
    addToCart(productWithoutVariant);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4 product-detail-container">
      <h2>{product.Title}</h2>
      <div className="text-center">
        {/* Responsive image with srcset */}

        <img src={product.Images} alt={product.Title} className="img-fluid" loading="lazy" />
      </div>
      <p>{product.Description}</p>

      {/* Display Price for Single Product */}
      {!product.Variant1 && !product.Variant2 && !product.Variant3 && (
        <div className="text-center">
          <p><strong>Price:</strong> ${product.Price}</p>
        </div>
      )}

      {/* Quantity Selector for Products Without Variants */}
      {!product.Variant1 && !product.Variant2 && !product.Variant3 && (
        <div className="mb-3 text-center">
          <label htmlFor="quantity">Quantity:</label>
          <div className="d-flex justify-content-center align-items-center">
            <Button variant="outline-secondary" onClick={decrementQuantity} className="me-2">
              -
            </Button>
            <span className="mx-2">{quantity}</span>
            <Button variant="outline-secondary" onClick={incrementQuantity} className="me-2">
              +
            </Button>
          </div>
        </div>
      )}

      {/* Add to Cart Button for Products Without Variants */}
      {!product.Variant1 && !product.Variant2 && !product.Variant3 && (
        <div className="text-center">
          <Button variant="success" onClick={handleAddToCartWithoutVariant} className="mb-3">
            Add to Cart
          </Button>
        </div>
      )}

      {/* Variants Section (Only for Products with Variants) */}
      {(product.Variant1 || product.Variant2 || product.Variant3) && (
        <>
          <h3 className="text-center">Variants</h3>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <ul className="list-unstyled">
                {/* Display Single Item Price as a Variant */}
                {product.Price && (
                  <li className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <span>Single Item - ${product.Price}</span>
                      <Button
                        variant="success"
                        onClick={() => handleAddToCart('Single Item', product.Price)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </li>
                )}
                {product.Variant1 && (
                  <li className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <span>{product.Variant1.split(' $')[0]} - ${parseFloat(product.Variant1.split('$')[1])}</span>
                      <Button
                        variant="success"
                        onClick={() => handleAddToCart(product.Variant1, parseFloat(product.Variant1.split('$')[1]))}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </li>
                )}
                {product.Variant2 && (
                  <li className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <span>{product.Variant2.split(' $')[0]} - ${parseFloat(product.Variant2.split('$')[1])}</span>
                      <Button
                        variant="success"
                        onClick={() => handleAddToCart(product.Variant2, parseFloat(product.Variant2.split('$')[1]))}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </li>
                )}
                {product.Variant3 && (
                  <li className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <span>{product.Variant3.split(' $')[0]} - ${parseFloat(product.Variant3.split('$')[1])}</span>
                      <Button
                        variant="success"
                        onClick={() => handleAddToCart(product.Variant3, parseFloat(product.Variant3.split('$')[1]))}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </>
      )}

      {/* Category and Subcategory with Tab Alignment */}
      <div className="text-right"> {/* Align text to the right */}
        <p><strong>Category:</strong>{"\t"}{product.Category}</p>
        <p><strong>Subcategory:</strong>{"\t"}{product.SubCategory}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
