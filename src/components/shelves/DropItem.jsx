import React from "react";
import { useDrop } from "react-dnd";

const DropItem = ({
  shelf,
  copyBooks,
  addbookToShelves,
  setShelfId,
  setDropShelfId,
  shelf_Id,
  deleteShelf
}) => {
  const [{ isOver }, drop] = useDrop({
    accept: "Item",
    drop: (item, monitor) => {
      const elementID = monitor.targetId;
      setShelfId(shelf_Id);
      setDropShelfId(elementID);
      addbookToShelves(item.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return (
    <>
      <li
        ref={drop}
        // style={{ minHeight: "4rem" }}
        key={shelf.id}
        className=" w-full"
      >
        <button onClick={() => deleteShelf(shelf_Id)}>
          <span className="text-sm text-cyan-400 cursor-pointer flex justify-start items-center ">
            ✖ قفسه {shelf.name}
          </span>
        </button>
        <ul className="	mt-1 flex flex-wrap  overflow-x-scroll  scrollbar-thin  scrollbar-thumb-pink-600 scrollbar-track-transparent">
          {copyBooks?.length === 0 ? (
            <>
              {!isOver && (
                <li className="opacity-70   ">+ از لیست بکش اینجا </li>
              )}
            </>
          ) : (
            copyBooks?.map((book) => (
              <li className=" text-xs mr-3  p-2" key={book.id}>
                * {book.name}
              </li>
            ))
          )}
          {isOver && (
            <div className="bg-green-400 rounded-md p-2 text-xs mr-3 ">
              + افزدون
            </div>
          )}
        </ul>
      </li>
    </>
  );
};

export default DropItem;
