import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

const Product = (props) => {

  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${props.product._id}`}>
          <Card.Img
            variant="top"
            src={props.product.image}
          />
        </Link>
        <Card.Body>
          <Link to={`/product/${props.product._id}`}>
            <Card.Title>{props.product.name}</Card.Title>
          </Link>
          <Card.Text as="h3">$ {props.product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
