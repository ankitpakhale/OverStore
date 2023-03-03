import React from "react";
import { Link } from "react-router-dom";

const BillingEntry = () => {
  return (
    <>
      <td>Abc</td>
      <td>demo</td>
      <td>100</td>
      <td>10</td>
      <td>1000</td>
      <td>23-12-2023</td>
      <td>
        <Link to="/singlebill">
          <i className="ti-eye"></i>
        </Link>
      </td>
    </>
  );
};

export default BillingEntry;
