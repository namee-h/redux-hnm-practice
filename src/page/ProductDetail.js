import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import apiClient from "../apiCilent";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  console.log(id);
  const getProductDetail = async () => {
    // let url = `http://localhost:5000/products/${id}`;
    let url = apiClient.get(`/products/${id}`)
    let res = await fetch(url);
    let data = await res.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="detail-img ">
          <img width={500} src={product?.img} />
          <div><FontAwesomeIcon icon={faHeart} /></div>
        </Col>
        <Col className="detail-area">
          <h3 className="mt-3">{product?.title}</h3>
          <div>₩ {product?.price}</div>
          <div>{product?.choice === true ? "Conscious Choice" : ""}</div>
          <div>{product?.new === true ? "new" : ""}</div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                사이즈선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  {product?.size[0]}
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  {product?.size[1]}
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  {product?.size[2]}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Button variant="dark"> 추가</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
