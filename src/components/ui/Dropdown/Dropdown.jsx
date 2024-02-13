import React from "react";

const Dropdown = () => {
  return (
    <form className="absolute top-0 w-full right-0 border border-gray-200  bg-gray-200 p-1 rounded-md">
      <li
        name="list"
        className="hover:bg-info duration-300 cursor-pointer list-none p-2"
      >
        List View
      </li>
      <li
        name="grid"
        className="hover:bg-info duration-300 cursor-pointer list-none p-2"
      >
        Grid View
      </li>
    </form>
  );
};

export default Dropdown;
