const TableBody = ({ item, model }) => {
  const rowPadding = !model ? "py-6" : "py-2";

  return (
    <tr>
      <th
        className={`border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap ${rowPadding} text-right flex items-center`}
      >
        <span className="ml-3 font-bold text-white">{item.name}</span>
      </th>
      <td
        className={`border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap ${rowPadding}`}
      >
        {item.topics.join(" , ")}
      </td>
      <td
        className={`border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap ${rowPadding}`}
      ></td>
    </tr>
  );
};

export default TableBody;
