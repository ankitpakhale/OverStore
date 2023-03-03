import React from "react";
import ProductBox from "../Container/ProductBox";
import AddProductModel from "../Layout/AddProductModel";

const Product = () => {
  return (
    <>
      <section className="section" id="product">
        <div className="container text-center">
          <h6 className="section-title mb-6">Product</h6>
          <button
            type="button"
            className="btn btn-primary m-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalCenter"
          >
            Add Product
          </button>
          <AddProductModel />
          <div className="row mb-1 mt-1">
            <div className="col-md-4">
              <ProductBox img={1} />
            </div>
            <div className="col-md-4">
              <ProductBox img={2} />
            </div>
            <div className="col-md-4">
              <ProductBox img={3} />
            </div>
          </div>
          <div className="row mb-1 mt-1">
            <div className="col-md-4">
              <ProductBox img={1} />
            </div>
            <div className="col-md-4">
              <ProductBox img={2} />
            </div>
            <div className="col-md-4">
              <ProductBox img={3} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Product;
