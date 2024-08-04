import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productThunk } from "../../redux/thunk/productThunk";
import { Container } from "reactstrap";
import {  Empty, Row, Skeleton } from "antd";
import Product from "../product/Product";

export default function Products() {
  // State
  const { products, status, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();


  useEffect(() => {
    if (status === "idle") {
      dispatch(productThunk());
    }
  }, [status, dispatch]);

  // Function handler - handle data
  let content;

  // if( status === 'loading') {
  //   render(

  //   )
  // }

  if (status === "error") {
    content = <Empty />;
  } else if (status === "succeeded") {
    content = (
      <Row gutter={[16, 24]}>
          {products &&
            products.map((item, index) => (
              <Product key={index} product={item} />
            ))}

      </Row>
    );
  }

  // Render
  return (
    <Container>
      <h1>Product List</h1>
      <Container className="mt-3">{content}</Container>
    </Container>
  );
}
