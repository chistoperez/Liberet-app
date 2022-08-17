import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import { NavBarContext } from "../context/NavBarContext";

const Cart = () => {
  const { setNavbarActive } = useContext(NavBarContext);
  setNavbarActive(0);
  return (
    <>
      Cart
      <NavBar />
    </>
  );
};

export default Cart;
