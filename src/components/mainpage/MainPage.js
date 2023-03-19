import React, { useState, useRef } from "react";
import MainPageCartButton from './MainPageCartButton'
import ChildPage from "./ChildPage";

const MainPage = (props) => {
    
    const [counter, setCounter] = useState([])
    console.log(counter)
  const shoeNameref = useRef();
  const descNameref = useRef();
  const priceNameref = useRef();
  const sizeref = useRef();

  const submitHandler = (event) => {
    
    event.preventDefault();
    const enteredShoename = shoeNameref.current.value;
    const enteredDescription = descNameref.current.value;
    const enteredPrice = priceNameref.current.value;
    const enteredSize = sizeref.current.value;
    const obj = {
      name: enteredShoename,
      desc: enteredDescription,
      price: enteredPrice,
      size: enteredSize,
    };
    setCounter((prevState) => [...prevState, obj])
    props.finalData(obj)
  };
  const changingFunction = (obj2) => {
    setCounter((prevState1) => [...prevState1, obj2])
    props.finalData(obj2)
  }
  return (
    <React.Fragment>
        <MainPageCartButton counter={counter}onClick={props.onShowCart}></MainPageCartButton>
      <form onSubmit={submitHandler}>
        <label>Shoename:</label>
        <input type="text" ref={shoeNameref}></input>
        <label>Description:</label>
        <input type="text" ref={descNameref}></input>
        <label>Price:</label>
        <input type="number" ref={priceNameref}></input>
        <label>Size:</label>
        <select ref={sizeref}>
          <option value="large">Large</option>
          <option value="medium">Medium</option>
          <option value="small">Small</option>
        </select>
        <button type="submit">Add Product</button>
      </form>
      <ChildPage func={changingFunction}></ChildPage>
    </React.Fragment>
  );
};

export default MainPage;
