import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div>
      <div className="card-img-area" onClick={showDetail}>
        <img width={300} src={item?.img} />
        <div>
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
      <div className="img-info">
        <div>{item?.choice === true ? "Conscious Choice" : ""}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new === true ? "NEW" : ""}</div>
      </div>
    </div>
  );
};

export default ProductCard;
