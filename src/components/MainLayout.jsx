const MainLayout = ({ children }) => {
  return (
    <>
      <main className="w-full h-full flex flex-col justify-between">
        <h3 className="h-16 flex justify-center items-center  bg-gray-800 ">
          کتابخانه من
        </h3>

        <section className="max-w-full h-full w-full flex relative overflow-y-hidden text-slate-950 justify-center ">
          <img
            src={require("../assets/background.jpg")}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {children}
        </section>
      </main>
    </>
  );
};

export default MainLayout;
