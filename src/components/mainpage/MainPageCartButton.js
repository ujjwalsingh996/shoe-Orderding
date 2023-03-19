import React from "react";
import CartIcon from "../cart/CartIcon";
import classes  from "./MainPageCartButton.module.css";


const HeaderCartButton = (props) => {

    const counter = props.counter.length

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart ({counter})</span>
      <span className={classes.badge}></span>
    </button>
  );
};

export default HeaderCartButton;
