import React, { useState} from "react";
import Cart from "./components/cart/Cart";
import MainPage from "./components/mainpage/MainPage";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const [data, setData] = useState([])

  const dataHandler = (obj) => {
    setData((data) => [...data, obj])
  }

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  return (
    <React.Fragment>
      {cartIsShown && <Cart data={data} onClose={hideCartHandler}/>}
    <MainPage finalData={dataHandler}onShowCart={showCartHandler}/>
    </React.Fragment>
  );
}

export default App;
