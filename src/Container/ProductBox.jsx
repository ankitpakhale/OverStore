import React from "react";
import { Link } from "react-router-dom";

const ProductBox = ({ img }) => {
  return (
    <>
      <Link to="/product" className="portfolio-card">
        <img
          className="portfolio-card-img img-responsive rounded"
          src={require(`../assets/imgs/folio-${img}.jpg`)}
          alt="Product"
        />
        <span className="portfolio-card-overlay">
          <span className="portfolio-card-caption">
            <h4>Product Name</h4>
            <p className="font-weight-normal">Category:</p>
          </span>
        </span>
      </Link>
    </>
  );
};

export default ProductBox;
