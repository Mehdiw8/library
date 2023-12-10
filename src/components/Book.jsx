const Book = ({book}) => {
  return (
    <div>
      <p>{book.title}</p>
      <p>Topics: {book.topics.join(", ")}</p>
    </div>
  );
};

export default Book;
