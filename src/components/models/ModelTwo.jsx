import Table from "../Table";

const ModelTwo = ({ books }) => {
  return (
    <Table
      books={books}
      model={2}
      tableHead="ارتباط چند به چند بین عناوین کتب و موضوعات"
      description={
        "در این مدل، هر کتاب می‌تواند در چند موضوع دسته‌بندی شود و هر موضوع می‌تواند شامل چندین کتاب باشد. "
      }
    />
  );
};

export default ModelTwo;
