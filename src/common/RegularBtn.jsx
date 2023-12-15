import React from "react";

const RegularBtn = ({ btnName, type }) => {
  return (
    <button
      type={type}
      className="bg-pink-600 hover:bg-pink-700 text-white  py-2 px-4 rounded"
    >
      {btnName}
    </button>
  );
};

export default RegularBtn;
