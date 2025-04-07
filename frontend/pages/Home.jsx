import React, { useState } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductGrid from '../components/ProductGrid';
import SidePanel from '../components/SidePanel';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('homeopathy'); // Default to "homeopathy"
  const [selectedSubcategory, setSelectedSubcategory] = useState('adel tinctures'); // Default to "adel tinctures"

  const handleCategoryChange = (category, subcategory) => {
    console.log("Category changed to:", category);
    console.log("Subcategory changed to:", subcategory);
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
  };

  return (
    <div>
      <Header />
      <Banner />
		<Container fluid className="px-0">
		  <Row className="g-0">
		    <Col md={4} className="ps-0"> {/* Increase width of SidePanel */}
		      <SidePanel onCategoryChange={handleCategoryChange} />
		    </Col>
		    <Col md={8}> {/* Decrease width of ProductGrid */}
		      <ProductGrid selectedCategory={selectedCategory} selectedSubcategory={selectedSubcategory} />
		    </Col>
		  </Row>
		</Container>
    </div>
  );
};

export default Home;