import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import { NavBarContext } from "../context/NavBarContext";
import { BsCartX } from "react-icons/bs";

const Cart = () => {
  const { setNavbarActive } = useContext(NavBarContext);
  setNavbarActive(0);
  return (
    <div className="bg-secondary-100/30 h-screen flex flex-col items-center justify-center ">
      <BsCartX size={200} className="text-secondary-100  " />
      <h1 className="text-secondary-100 text-center text-5xl pt-10 font-bold">
        Tu carrito está vacío.
      </h1>
      <NavBar />
    </div>
  );
};

export default Cart;
