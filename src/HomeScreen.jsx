import React from 'react'
import {Col, Row} from 'react-bootstrap'
import products from './products-and-images/products-and-images/products'
import Product from './components/product';

const HomeScreen = () => {
  return (
    <div>
        <h2>Products Listed</h2>
        <Row>
        {
            products.map((product, product_id)=>(
                <Col key={product_id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}/>
                </Col>
            ))
        }
        </Row>
    </div>
  )
}

export default HomeScreen
