import React from "react";
import Modal from "../UI/Modal";

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div>
        <label>
          Product Name:{" "}
          {props.data.map((data) => (
            <li>{data.name}</li>
          ))}
          {/* {props.passing.map((pass) =>  (
            <li>{pass.name}</li>
          ) )} */}
        </label>

        <label>
          Size:{" "}
          {props.data.map((data) => (
            <li>{data.size}</li>
          ))}
           {/* {props.passing.map((pass) =>  (
            <li>{pass.size}</li>
          ) )} */}
        </label>

        <label>
          Price:{" "}
          {props.data.map((data) => (
            <li>{data.price}</li>
          ))}
           {/* {props.passing.map((pass) =>  (
            <li>{pass.price}</li>
          ) )} */}
        </label>

        <button onClick={props.onClose}>Order</button>
        <button onClick={props.onClose}>Cancel</button>
      </div>
    </Modal>
  );
};

export default Cart;
