import React from "react";
import AddBillModel from "../Layout/AddBillModel";
import BillingEntry from "../Container/BillingEntry";
const Billing = () => {
  return (
    <>
      <header className="header header-mini">
        <div className="header-title">Billing</div>
      </header>
      <div className="container">
        <section className="section" id="product">
          <button
            type="button"
            className="btn btn-primary m-2 ml-auto mr-auto"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalCenter"
          >
            Add Bill
          </button>

          <AddBillModel />
        </section>
        <div className="container">
          <table className="table table-primary table-striped" id="myTable">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Quintity</th>
                <th>Total</th>
                <th>Bill Date</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <BillingEntry />
              </tr>

              <tr>
                <BillingEntry />
              </tr>

              <tr>
                <BillingEntry />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Billing;
