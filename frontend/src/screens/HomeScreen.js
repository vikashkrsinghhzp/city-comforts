import React, { useEffect, useState } from 'react'
import Content from '../components/Content';
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'


function HomeScreen() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    console.log(8)
    const fetchProducts = async () => {
      const response = await axios.get('/api/products');
      //console.log(response);
      setProducts(response.data);
    };
    fetchProducts();
  }, [])

  return (
    <div>
      <Row>
        {products.map(product => {
          //console.log(product.name)
          return (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Content name={product.name} description={product.description} image={product.image}/>
          </Col>
        )})}
      </Row>
    </div>
  )
}

export default HomeScreen
