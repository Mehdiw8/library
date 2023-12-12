import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav>
      <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
        <NavItem link="/" content="مدل 1" ariaLabel="صفحه اصلی" />
        <NavItem link="/model_2" content="مدل 2" ariaLabel="مدل 2" />
        <NavItem link="/model_3" content="مدل 3" ariaLabel="مدل 3" />
      </aside>
    </nav>
  );
};

export default Navbar;
