import { useState, useEffect } from "react";
import {
  getAllBooks,
  getAllShelves,
  getAllSubjects,
} from "./services/libraryServices";
import { Route, Routes } from "react-router-dom";
import { ModelOne, ModelThree, ModelTwo } from "./components/models";
import Navbar from "./components/Navbar";
import MainLayout from "./layouts/MainLayout";

function App() {
  const [shelves, setShelves] = useState([]);
  const [books, setBooks] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const shelvesData = await getAllShelves();
        const booksData = await getAllBooks();
        const subjectsData = await getAllSubjects();

        setShelves(shelvesData);
        setBooks(booksData);
        setSubjects(subjectsData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <section className="h-screen w-full bg-white relative flex overflow-hidden">
      <Navbar />
      <MainLayout error={error} loading={loading}>
        <Routes>
          <Route path="/" default element={<ModelOne shelves={shelves} />} />
          <Route path="/model_2" element={<ModelTwo books={books} />} />
          <Route path="/model_3" element={<ModelThree subjects={subjects} />} />
        </Routes>
      </MainLayout>
    </section>
  );
}

export default App;
