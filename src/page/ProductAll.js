import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [query, setQuery] = useSearchParams();
  const [productList, setProductList] = useState([]);
  const getProduct = async () => {
    let searchQuery = query.get("q") || "";
    console.log("searchQuery", searchQuery);
    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let rep = await fetch(url);
    let data = await rep.json();
    setProductList(data);
  };
  useEffect(() => {
    getProduct();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col lg={3} md={4} sm={6} xs={12} className="card-area">
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
