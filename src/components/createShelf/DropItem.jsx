import React from "react";
import { useDrop } from "react-dnd";

const DropItem = ({
  shelf,
  copyBooks,
  addbookToShelves,
  setShelfId,
  setDropShelfId,
  shelf_Id,
}) => {
  const [{ isOver }, drop] = useDrop({
    accept: "Item",
    drop: (item, monitor) => {
      const elementID = monitor.targetId;
      setShelfId(shelf_Id);
      setDropShelfId(elementID);
      // console.log("Dropped on:", elementID);
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
        style={{ minHeight: "4rem" }}
        key={shelf.id}
        className=" w-full overflow-y-scroll  scrollbar-thin  scrollbar-thumb-pink-600 scrollbar-track-transparent"
      >
        <span>قفسه {shelf.name}</span>
        <ul className="mt-1 ">
          {copyBooks.length === 0 ? (
            <>
              {!isOver && <li className="opacity-70">+ از لیست بکش اینجا </li>}
            </>
          ) : (
            copyBooks.map((book) => <li key={book.id}> {book.name}</li>)
          )}
          {isOver && (
            <div className="bg-green-400 rounded-md p-2 mt-1">+ افزدون</div>
          )}
        </ul>
      </li>
    </>
  );
};

export default DropItem;
