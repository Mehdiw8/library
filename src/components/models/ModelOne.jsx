import Table from "../Table";

const ModelOne = ({ shelves }) => {
  return (
    <Table
      shelves={shelves}
      model={1}
      tableHead=" ارتباط یک به چند بین موضوعات و قفسه‌ها"
      description={"در این مدل، هر قفسه می‌تواند چند موضوع داشته باشد."}
    />
  );
};

export default ModelOne;
