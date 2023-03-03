import React from "react";
const SingleBill = () => {
  return (
    <>
      <header className="header header-mini">
        <div className="header-title">Your Bill</div>
      </header>
      <div className="card mr-auto ml-auto mt-5 mb-5 col-md-4">
        <img
          className="card-img-top"
          src={require("../assets/imgs/img-1.jpg")}
          alt="Product"
          height="200px"
          width="100%"
        />
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <h5 className="card-title">Customer name</h5>
            </div>
            <div className="col-6">
              <h5 className="card-title">Product Name</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <h6 className="card-title">Price</h6>
            </div>
            <div className="col-4">
              <h6 className="card-title">Quintity</h6>
            </div>
            <div className="col-4">
              <h6 className="card-title">Total</h6>
            </div>
          </div>
          <p className="card-text text-primary">Product Description</p>
        </div>
      </div>
    </>
  );
};
export default SingleBill;
