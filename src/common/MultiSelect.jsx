import Select from "react-select";

const MultiSelect = ({ options ,selectHandler  }) => {
  return (
    <Select
      className="text-black"
      isMulti
      options={options}
      isRtl={true}
      placeholder="انتخاب موضوعات ..."
      noOptionsMessage={() => "تمام شد 🎈"}
      onChange={selectHandler}
    />
  );
};

export default MultiSelect;
