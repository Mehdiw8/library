import React from "react";

const RegularBtn = ({ btnName, type, customStyle, onclick }) => {
  return (
    <button
      onClick={onclick}
      type={type}
      className={`bg-pink-600 hover:bg-pink-700 text-white  py-2 px-4 rounded ${customStyle}`}
    >
      {btnName}
    </button>
  );
};

export default RegularBtn;
