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
          <Col md={3} className="ps-0">
            <SidePanel onCategoryChange={handleCategoryChange} />
          </Col>
          <Col md={9}>
            <ProductGrid selectedCategory={selectedCategory} selectedSubcategory={selectedSubcategory} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
/*16 Mar 25

//src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductGrid from '../components/ProductGrid';
import SidePanel from '../components/SidePanel';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Container fluid className="px-0">
        <Row className="g-0">
          <Col md={3} className="ps-0">
            <SidePanel />
          </Col>
          <Col md={9}>
            <ProductGrid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
*/