import { useState, useEffect } from "react";
import "./App.css";
import { getAllBooks, getAllShelves } from "./services/libraryServices";
import { NavLink, Route, Routes } from "react-router-dom";
import { ModelOne, ModelThree, ModelTwo } from "./components/models";
import { BACKGROUND } from "./helpers/color";
import Navbar from "./components/Navbar";
import MainLayout from "./components/MainLayout";

function App() {
  const [shelves, setShelves] = useState();
  const [books, setBooks] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function getData() {
      setLoading(false);
      try {
        const copydata = await getAllShelves();
        const copyBooks = await getAllBooks();

        setBooks(copyBooks);
        setShelves(copydata);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  return (
    <section className="h-screen w-full bg-white relative flex overflow-hidden">
  
      <Navbar />
      <MainLayout>
        <Routes>
          <Route path="/" default element={<ModelOne loading={loading} />} />
          <Route path="/m2" element={<ModelTwo />} />
          <Route path="/m3" element={<ModelThree />} />
        </Routes>
      </MainLayout>
    </section>
  );
}

export default App;
