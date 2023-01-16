import React from "react";
//import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import img from "../../assets/mainBcg.jpeg";
export default function FeaturedProduct({ image, title, id, price }) {
  return (
    <article className="featured-product">
      <div className="img-container">
        <img src={image || img} alt={title || "default title"} />
        
      </div>
      <div className="product-footer">
        <p className="product-title">{title || "default title"}</p>
        <p className="product-price">{price || 0}</p>
      </div>
    </article>
  );
}
FeaturedProduct.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
  
};
