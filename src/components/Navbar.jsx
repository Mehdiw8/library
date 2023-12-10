import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <>
      <nav>
        <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
          <NavItem link="/" content="1"/>
          <NavItem link="/m2" content="2"/>
          <NavItem link="/m3" content="3"/>
        </aside>
      </nav>
    </>
  );
};

export default Navbar;
