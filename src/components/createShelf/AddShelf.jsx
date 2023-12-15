import { useState, useEffect, useCallback } from "react";
import { Title, RegularBtn, MultiSelect } from "../../common";
import DragItem from "./DragItem";
import DropItem from "./DropItem";

const AddShelf = ({ shelves, books, setShelves }) => {
  // const dropRefs = useRef(copyBooks.map(() => createRef()));
  const [shelfId, setShelfId] = useState("");
  const [dropShelfId, setDropShelfId] = useState("");
  const [shelfDetail, setShelfDetail] = useState({
    name: "",
    topics: [],
  });

  const options = [
    { value: "خارجی", label: "خارجی" },
    { value: "رمان", label: "رمان" },
    { value: "داستان های کوتاه", label: "داستان های کوتاه" },
    { value: "ایرانی", label: "ایرانی" },
    { value: "تاریخی", label: "تاریخی" },
    { value: "رئال", label: "رئال" },
  ];
  const addbookToShelves = useCallback(
    (id) => {
      console.log(dropShelfId);
      console.log(`T${shelfId + 5}`);
      if (`T${shelfId + 5}` === dropShelfId) {
        console.log("nice");
      }
      // const targetShelf = shelves.find((shelf) => shelf.id === id);
      // console.log(targetShelf)
      console.log(id);
    },
    [dropShelfId, shelfId]
  );
  useEffect(() => {
    addbookToShelves();
  }, [dropShelfId, shelfId, addbookToShelves]);

  const selectHandler = (subject) => {
    setShelfDetail({
      ...shelfDetail,
      topics: subject,
    });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className=" flex justify-around mx-4 items-center relative bg-blueGray-50 w-full">
      <section className="  flex justify-between items-start box-border h-5/6	 break-words w-full mb-6 shadow-lg rounded-md bg-pink-900 text-white">
        {/* shelf */}
        <form
          onSubmit={SubmitHandler}
          className="flex flex-col h-full flex-1 py-2 px-5	 "
        >
          <Title classStyle=" text-center text-md" text="اضاف کردن قفسه" />
          <div className="flex flex-col justify-evenly h-full ">
            <label htmlFor="shelf">
              <input
                onChange={(e) =>
                  setShelfDetail({ ...shelfDetail, shelfName: e.target.value })
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
            {/*  */}
            {shelves?.map((shelf, index) => (
              <DropItem
                key={index}
                shelf_Id={shelf.id}
                shelf={shelf}
                copyBooks={shelf.booksInShelf}
                addbookToShelves={addbookToShelves}
                setShelfId={setShelfId}
                setDropShelfId={setDropShelfId}
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
      </section>
    </section>
  );
};

export default AddShelf;
