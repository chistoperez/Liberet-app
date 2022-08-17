import React from "react";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineMenuOpen } from "react-icons/md";

const handleClick = () => {
  alert("Select Location");
};
const SelectLocation = () => {
  return (
    <div className="flex flex-row ml-6 mr-4 mt-3 space-x-4 mb-3  ">
      <MdLocationOn className="text-secondary-200" size={25} />
      <button onClick={handleClick} className="flex-grow text-left pl-3">
        <span className="text-secondary-300 ">Select location...</span>
      </button>
      <MdOutlineMenuOpen size={25} />
    </div>
  );
};

export default SelectLocation;
