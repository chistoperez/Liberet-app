import React from "react";
import { MdPlusOne } from "react-icons/md";

const Button3 = () => {
  const handleClick = () => {
    alert("+1 Platillo");
  };
  return (
    <button
      className="mt-3  bg-primary-400 font-bold text-xl px-4 py-2 rounded-3xl shadow hover:shadow-lg  outline-none focus:outline-none mr-1  ease-linear transition-all duration-150"
      type="button"
      onClick={handleClick}
    >
      <div className=" flex flex-row gap-2">
        <MdPlusOne className="text-primary-200 " size={25} />

        <span>Platillos</span>
      </div>
    </button>
  );
};

export default Button3;
