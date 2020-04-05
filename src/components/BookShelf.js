import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import './BookShelf.css';

const BookShelf = ({ shelfName, books, shelves, updateBookShelf }) => {
  if (!books || !Array.isArray(books) || books.length === 0) return null;

  return (
    <div>
      <h3>{shelfName}</h3>
      <ul className="books-grid">
        {books.map((book) => {
          if (!book) return null;
          return (
            <Book
              key={book.id}
              book={book}
              shelves={shelves}
              updateBookShelf={updateBookShelf}
            />
          );
        })}
      </ul>
    </div>
  );
};

BookShelf.propTypes = {
  shelfName: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default BookShelf;
