import Spinner from "../components/Spinner";
import { SiBookstack } from "react-icons/si";

const MainLayout = ({ children, loading, error }) => {
  return (
    <>
      <main className="w-full h-full flex flex-col justify-between">
        <div className="h-16 flex justify-center items-center bg-gray-800">
          <SiBookstack className="mt-1 ml-2 text-xl" />
          <h3>کتابخانه من</h3>
          {error && (
            <p className="text-rose-600 ml-2"> | لطفا سرور رو استارت کنید.</p>
          )}
        </div>

        <section className="max-w-full h-full w-full flex relative overflow-y-hidden text-slate-950 justify-center">
          <img
            src={require("../assets/background.jpg")}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {loading ? <Spinner /> : children}
        </section>
      </main>
    </>
  );
};

export default MainLayout;
