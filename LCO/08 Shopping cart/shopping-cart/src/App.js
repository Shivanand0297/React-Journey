import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import BuyPage from "./Components/BuyPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Components/Cart";
import "./App.css";

const App = () => {
  const [cartItem, setCartItem] = useState([]); // state to store cart items and change it

  const addInCart = (item) => {
    const isAlreadyPresent = cartItem.findIndex(
      (element) => element.id === item.id
    );

    if (isAlreadyPresent !== -1) {
     return toast("Item already added", { 
      type: "error", 
      position: "bottom-right" 
    });
    }

    // if item is not present in the cart then add it
    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]); //reseting the cart before checkout
    toast("Purchased successfully", {
      type: "success", 
      position: "bottom-right"
    });
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };

  return (
    <Container fluid>
      <Row>
        <Col md="9">
          <BuyPage addInCart={addInCart} />
        </Col>
        <Col md="3">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default App;
