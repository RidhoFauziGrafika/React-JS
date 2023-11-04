import React from "react";
import Book from "../Book/Book";
import books from "../Books/Books";
import "../../css/style.css";

const BookList = () => {
  return (
    <>
      <h1>Amazon Best seller</h1>
      <div className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </div>
    </>
  );
};

export default BookList;
