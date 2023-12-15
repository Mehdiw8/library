import { TiPencil } from "react-icons/ti";
import TabelBody from "./TabelBody";

const Table = ({ tableHead, shelves, description, books, model, subjects }) => {
  return (
    <section className="relative pt-12 bg-blueGray-50">
      <div className="w-full mb-12 px-4">
        <div className="  relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-pink-900 text-white">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-lg text-white">
                  {tableHead}
                </h3>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse ">
              <thead>
                <tr>
                  <th className="px-6 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-right bg-pink-800 text-pink-300 border-pink-700">
                    {model === 1 && "قفسه کتاب"}
                    {model === 2 && "عناوین کتاب ها "}
                    {model === 3 && " موضوعات"}
                  </th>
                  <th className="px-6 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-right bg-pink-800 text-pink-300 border-pink-700">
                    {model === 1 || model === 2 ? " موضوعات" : ""}
                    {model === 3 && "قفسه کتاب"}
                  </th>

                  <th className="px-14 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-right bg-pink-800 text-pink-300 border-pink-700"></th>
                </tr>
              </thead>
              <tbody className=" ">
                {shelves?.map((shelf) => (
                  <TabelBody key={shelf.id} item={shelf} />
                ))}
                {books?.map((book) => (
                  <TabelBody key={book.id} item={book} />
                ))}
                {subjects?.map((subjects) => (
                  <TabelBody key={subjects.id} item={subjects} model />
                ))}
              </tbody>
            </table>
            <div className=" mb-0 px-4 py-3  bg-pink-800 border-pink-700 align-middle border border-solid border-l-0 border-r-0 whitespace-nowrap ">
              <div className="flex flex-wrap items-center">
                <TiPencil size={20} color="yellow" className="pt-1 pl-1" />
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
