import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

function BookRow(props) {
  const book = props.book;

  const authors = book.authors.map(author => (
    <div key={author.id}>
      <Link to={`/authors/${author.id}`}>{author.name}</Link>
    </div>
  ));

  const availableButton = (
    <button
      className={`btn btn-${book.available ? "success" : "danger"}`}
      onClick={() =>
        alert("You need to make me 🎵 work work work work work 🎵")
      }
    >
      {book.available ? "borrow" : "return"}
    </button>
  );

  return (
    <tr>
      <td>{availableButton}</td>
      <td>{book.title}</td>
      <td>{authors}</td>
      <td>
        <Link to={`/books/${book.color}`}>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </Link>
      </td>
    </tr>
  );
}

export default observer(BookRow);
