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
import AddShelf from "./components/shelves/AddShelf";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [shelves, setShelves] = useState([]);
  const [books, setBooks] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [forceRender, setForeceRender] = useState(false);
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
  }, [forceRender]);

  return (
    <section className="h-screen w-full bg-white relative flex overflow-hidden">
      <ToastContainer
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        rtl={true}
        theme="colored"
      />
      <Navbar />
      <MainLayout error={error} loading={loading}>
        <Routes>
          <Route path="/" default element={<ModelOne shelves={shelves} />} />r
          <Route path="/model_2" element={<ModelTwo books={books} />} />
          <Route path="/model_3" element={<ModelThree subjects={subjects} />} />
          <Route
            path="/add_shelf"
            element={
              <AddShelf
                toast={toast}
                books={books}
                shelves={shelves}
                setShelves={setShelves}
                setForeceRender={setForeceRender}
              />
            }
          />
        </Routes>
      </MainLayout>
    </section>
  );
}

export default App;
