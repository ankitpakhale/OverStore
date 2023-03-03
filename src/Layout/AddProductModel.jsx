import React from "react";

const AddProductModel = () => {
  return (
    <>
      <div
        className="modal"
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
                Add Profuct From
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
                    <input
                      type="text"
                      className="form-control"
                      name="ProductName"
                      placeholder="Product Name"
                    />
                  </div>
                  <div className="col-md-6 mt-2">
                    <select className="form-control">
                      <option>Product Category</option>
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
                <div className="row">
                  <div className="col-md-12 mt-2">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Product Description"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-2">
                    <input
                      type="file"
                      className="form-control-file"
                      name="product image"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Add Customer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProductModel;
