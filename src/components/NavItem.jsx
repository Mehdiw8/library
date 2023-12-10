import { NavLink } from "react-router-dom";

const NavItem = ({ content, link }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "text-gray-800 bg-white rounded-lg " : ""
      }
      to={link}
    >
      <button className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear">
        {content}
      </button>
    </NavLink>
  );
};

export default NavItem;
