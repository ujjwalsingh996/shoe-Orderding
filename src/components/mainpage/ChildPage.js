import React, { useState } from "react";

const ChildPage = (props) => {
  const [updation, setUpdation] = useState({});
  let [large1, setLarge1] = useState(98);
  let [medium1, setMedium1] = useState(45);
  let [small1, setSmall1] = useState(1);
  let [large2, setLarge2] = useState(98);
  let [medium2, setMedium2] = useState(45);
  let [small2, setSmall2] = useState(1);
  const addToCart1 = (event) => {
    event.preventDefault();
    setLarge1(large1 = large1 - 1);
    setUpdation({ name: "Gucci", desc: "Cotton", size: "large", price: 1999 });
    props.func(updation);
  };
  const addToCart2 = (event) => {
    event.preventDefault();
    setMedium1(medium1 = medium1 -1);
    setUpdation({ name: "Gucci", desc: "Cotton", size: "medium", price: 1999 });
    props.func(updation);
  };
  const addToCart3 = (event) => {
    event.preventDefault();
    setSmall1(small1 = small1-1);
    setUpdation({ name: "Gucci", desc: "Cotton", size: "small", price: 1999 });
    props.func(updation);
  };
  const addToCart4 = (event) => {
    event.preventDefault();
    setLarge2(large2 = large2 - 1);
    setUpdation({ name: "Armani", desc: "Cotton", size: "large", price: 2999 });
    props.func(updation);
  };
  const addToCart5 = (event) => {
    event.preventDefault();
    setMedium2(medium2 = medium2 - 1);
    setUpdation({
      name: "Armani",
      desc: "Cotton",
      size: "medium",
      price: 2999,
    });
    props.func(updation);
  };
  const addToCart6 = (event) => {
    event.preventDefault();
    setSmall2(small2 = small2 - 1);
    setUpdation({ name: "Armani", desc: "Cotton", size: "small", price: 2999 });
    props.func(updation);
  };
  return (
    <div>
      <form>
        <h2>Name: Navy Blue Armani Shoes</h2>
        <h2>Description: 100% Cotton</h2>
        <h2>Price: 1299</h2>
        <button onClick={addToCart1}>Large({large1})</button>
        <button onClick={addToCart2}>Medium({medium1})</button>
        <button onClick={addToCart3}>Small({small1})</button>
        <br />
        <h2>Name: Gucci Shoes</h2>
        <h2>Description: 100% Cotton</h2>
        <h2>Price: 1999</h2>
        <button onClick={addToCart4}>Large({large2})</button>
        <button onClick={addToCart5}>Medium({medium2})</button>
        <button onClick={addToCart6}>Small({small2})</button>
      </form>
      {/* <Cart passing={updation}></Cart> */}
    </div>
  );
};

export default ChildPage;
