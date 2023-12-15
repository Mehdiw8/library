import React from "react";
import { Link } from "react-router-dom";

const Button = ({ btnName, customStyle, link }) => {
  return (
    <div className={customStyle}>
      <div className=" rounded-lg bg-black flex justify-center items-center">
        <div className="relative inline-flex  group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <Link
            to={link}
            title={btnName}
            className="relative inline-flex items-center justify-center px-2 py-2  text-white transition-all duration-200 bg-gray-900  rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            {btnName}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Button;
