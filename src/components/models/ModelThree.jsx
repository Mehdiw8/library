import Table from "../Table";

const ModelThree = ({ subjects }) => {
  return (
    <Table
      subjects={subjects}
      model={3}
      tableHead="  ارتباط یک به چند بین قفسه‌ها و موضوعات"
      description={"در این مدل، هر موضوع تنها در یک قفسه قرار می‌گیرد."}
    />
  );
};

export default ModelThree;
