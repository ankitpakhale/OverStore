import React from "react";

const AddBillModel = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Add Billing From
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-6 mt-2">
                    <select className="form-control">
                      <option>Customer Name</option>
                      <option>abc</option>
                      <option>xyz</option>
                    </select>
                  </div>
                  <div className="col-md-6 mt-2">
                    <select className="form-control">
                      <option>Product Name</option>
                      <option>abc</option>
                      <option>xyz</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mt-2">
                    <input
                      type="number"
                      className="form-control"
                      name="Price"
                      placeholder="Price"
                      readonly
                    />
                  </div>
                  <div className="col-md-6 mt-2">
                    <input
                      type="number"
                      className="form-control"
                      name="quntity"
                      placeholder="Enter Quntity"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Add Bill
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBillModel;
