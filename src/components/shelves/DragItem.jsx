// braye har li lazme k in hook estefade she
import { useDrag } from "react-dnd";

const DragItem = ({ text, count, shelves }) => {
  // console.log(shelves[`${[index]}`]);

  // first variable is Boolean , refrence whitch element make dragable
  // return mikone yek object ro k haviye yekseri informatione
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "Item",
    item: { id: count },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <>
      <li
        ref={drag}
        className=" cursor-pointer text-body-color dark:text-dark-6  text-base flex justify-start items-center mt-3 "
        style={{
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <span className="bg-slate-500 mx-1.5  text-sm flex h-[20px] w-full max-w-[20px] items-center justify-center rounded  text-white">
          {count}
        </span>
        {text}
      </li>
    </>
  );
};

export default DragItem;
