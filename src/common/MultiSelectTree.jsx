import React, { useState } from "react";
import { TreeSelect } from "antd";
import { option2 } from "../components/shelves/options";
import "../styles/multitree.css";

const MultiSelectTree = () => {
  const { SHOW_PARENT } = TreeSelect;
  const treeData = option2;
  const [value, setValue] = useState([]);
  const onChange = (newValue) => {
    console.log("onChange ", newValue);
    setValue(newValue);
  };

  const notFound = () => {
    return <p>پیدا نشد 🎈</p>;
  };

  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    autoClearSearchValue: "true",
    bordered: "true",
    placeholder: "انتخاب کنید ...",
    popupClassName: "dropdown",
    style: {
      width: "100%",
      padding: "20px 0",
      height: "85px",
      with: "100%",
      fontFamily: "Vazir",
      color: "black",
    },
    treeIcon: true,
    notFoundContent: notFound(),
  };
  return <TreeSelect  {...tProps} direction="rtl" 	 />;
};
export default MultiSelectTree;
