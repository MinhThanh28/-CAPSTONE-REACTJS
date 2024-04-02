import React from "react";

const Cart = () => {
  return (
    <div className="container mt-3">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <input type="checkbox" />
            </th>
            <th scope="col">ID</th>
            <th scope="col">Img</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>1</td>
            <td>
              <img
                src="/img/image 5.png"
                alt="Product"
                style={{ width: "50px", height: "auto" }}
              />
            </td>
            <td>Product Name</td>
            <td>$20</td>
            <td>
              <button className="btn btn-outline-secondary">-</button>
              <input
                type="text"
                className="mx-1 text-center"
                style={{ width: "50px" }}
                value="1"
                readOnly
              />
              <button className="btn btn-outline-secondary">+</button>
            </td>
            <td>$20</td>
            <td>
              <button className="btn btn-primary me-2">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          {/* Repeat <tr> for each product in the cart */}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <button className="btn btn-success">SUBMIT ORDER</button>
      </div>
    </div>
  );
};

export default Cart;
