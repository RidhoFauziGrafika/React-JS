import React from "react";
import "../../css/style.css";

const Book = (props) => {
  const { title, author, img, number } = props;

  return (
    <div className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">{number + 1}</span>
    </div>
  );
};

export default Book;
