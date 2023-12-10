import Spinner from "../Spinner";
import Table from "../Table";

const ModelOne = ({ loading }) => {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section>
          <Table />
        </section>
      )}
    </>
  );
};

export default ModelOne;
