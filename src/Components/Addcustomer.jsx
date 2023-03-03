import React from "react";
const AddCustomer = () => {
  return (
    <>
      <header className="header header-mini">
        <div className="header-title">Add Customer</div>
      </header>
      <div className="mr-auto ml-auto mt-5 mb-5 col-4">
        <form>
          <div className="row">
            <div className="col-md-6 mt-2">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Customer Name"
              />
            </div>
            <div className="col-md-6 mt-2">
              <input
                type="Number"
                className="form-control"
                name="number"
                placeholder="Customer Customer Number"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-2">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="col-md-6 mt-2">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter Email"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mt-2">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Customer Address"
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Add Customer
          </button>
        </form>
      </div>
    </>
  );
};
export default AddCustomer;
