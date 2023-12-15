import { NavLink } from "react-router-dom";

const NavItem = ({ content, link, ariaLabel }) => {
  return (
    <NavLink 
      className={({ isActive }) =>
        isActive
          ? "text-gray-800 bg-white rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          : ""
      }
      to={link}
      aria-label={ariaLabel}
    >
      <button className="h-12 w-12  flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:outline-none focus:ring focus:border-blue-300">
        {content}
      </button>
    </NavLink>
  );
};

export default NavItem;
