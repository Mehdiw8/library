import { useState, useEffect, useCallback } from "react";
import { Title, RegularBtn, MultiSelect } from "../../common";
import { DragItem, DropItem, options } from "./index";
import { createTheShelf, deleteTheShelf } from "../../services/libraryServices";
import { useNavigate } from "react-router-dom";

const AddShelf = ({ shelves, books, setShelves, setForeceRender, toast }) => {
  const navigate = useNavigate();
  const [shelfId, setShelfId] = useState("");
  const [dropShelfId, setDropShelfId] = useState("");
  const [bookId, setBookId] = useState();
  const [shelfDetail, setShelfDetail] = useState({
    id: "",
    name: "",
    topics: [],
    booksInShelf: [],
  });
  const [shelfDelId, setShelfDelId] = useState([]);
  const addbookToShelves = useCallback(
    (id) => {
      let uniqueIds = new Set();
      setBookId(id);
      if (`T${shelfId - 1}` === dropShelfId) {
        const findBook = books.find((book) => book.id === bookId);
        const findShelf = shelves.find((shelf) => shelf.id === shelfId);
        if (findBook) {
          const { booksInShelf } = findShelf;
          booksInShelf.push(findBook);
          let uniqueArray = booksInShelf.filter((obj) => {
            if (!uniqueIds.has(obj.id)) {
              uniqueIds.add(obj.id);
              return true;
            }
            toast.error("اینو قبلا اضاف کردی", { icon: "🎈" });
            return false;
          });
          findShelf["booksInShelf"] = uniqueArray;
        }
      }
    },
    [dropShelfId, shelfId, shelves, books, bookId, toast]
  );

  useEffect(() => {
    addbookToShelves();
  }, [dropShelfId, shelfId, addbookToShelves, shelves]);

  const selectHandler = (subject) => {
    const topics = subject.map((item) => item.value);

    setShelfDetail({
      ...shelfDetail,
      id: shelves.length + 1,
      topics: topics,
    });
  };
  const deleteShelf = async (shelf_Id) => {
    const copyShelfDelId = shelfDelId;
    copyShelfDelId.push(shelf_Id);
    setShelfDelId(copyShelfDelId);
    toast.error("قفسه با موفقیت پاک شد", { icon: "💣" });
    const newShelves = shelves.filter((shelf) => shelf.id !== shelf_Id);
    setShelves(newShelves);
  };
  const createShelf = async (e) => {
    e.preventDefault();
    try {
      const { status } = await createTheShelf(shelfDetail);
      if (status === 201) {
        toast.success("قفسه با موفقیت ساخته شد", { icon: "🚀" });
      }
    } catch (error) {
      console.log(error);
    }
    setForeceRender((prev) => !prev);
    // navigate(0);
  };
  const saveChanges = () => {
    shelfDelId?.map(async (shelfId) => {
      try {
        await deleteTheShelf(shelfId);
      } catch (error) {
        console.log(error);
      }
    });
    navigate("/");
  };

  return (
    <section className=" flex justify-around mx-4 items-center relative bg-blueGray-50 w-full">
      <section className=" relative  flex justify-between items-start box-border h-5/6	 break-words w-full mb-6 shadow-lg rounded-md bg-pink-900 text-white">
        {/* shelf */}
        <form
          onSubmit={createShelf}
          className="flex flex-col h-full flex-1 py-2 px-5	 "
        >
          <Title classStyle=" text-center text-md" text="اضاف کردن قفسه" />
          <div className="flex flex-col justify-evenly h-full ">
            <label htmlFor="shelf">
              <input
                onChange={(e) =>
                  setShelfDetail({ ...shelfDetail, name: e.target.value })
                }
                type="text"
                name="username"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="نام قفسه"
                required
              />
            </label>
            <MultiSelect options={options} selectHandler={selectHandler} />
            <RegularBtn type="submit" btnName={"اضافه شود"} />
          </div>
        </form>

        {/* subjects  */}
        <div className=" w-full flex-1 py-2 px-5 h-full bg-pink-800 border-pink-700 align-middle border border-solid border-t-0 border-b-0">
          <Title
            classStyle=" w-full  text-center text-md"
            text="دسته بندی موضوعات و قفسه"
          />
          <ul className="text-sm  w-full flex flex-col justify-start items-start h-5/6 overflow-y-scroll mt-3  scrollbar-thin  scrollbar-thumb-pink-600 scrollbar-track-transparent ">
            {/* shelves */}
            {shelves?.map((shelf, index) => (
              <DropItem
                key={index}
                shelf_Id={shelf.id}
                shelf={shelf}
                copyBooks={shelf.booksInShelf}
                addbookToShelves={addbookToShelves}
                setShelfId={setShelfId}
                setDropShelfId={setDropShelfId}
                deleteShelf={deleteShelf}
              />
            ))}
          </ul>
        </div>

        {/* books */}
        <div className="flex-1 py-2 px-5">
          <Title classStyle=" text-center text-md" text="لیست کتاب های موجود" />
          <ul className="space-y-5 ">
            {books.map((book, index) => (
              <DragItem
                shelves={shelves}
                key={book.id}
                count={index + 1}
                text={book.name}
              />
            ))}
          </ul>
        </div>

        <RegularBtn
          customStyle="absolute left-2 bottom-2  "
          btnName={"ذخیره تغییرات 🚀"}
          onclick={saveChanges}
        />
      </section>
    </section>
  );
};

export default AddShelf;
