import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

const SearchResults = ({ books, shelves, updateBookShelf }) => {
  if (!Array.isArray(books))
    return (
      <h3 style={{ textAlign: 'center', marginTop: '25vh' }}>
        No results found...
      </h3>
    );

  return (
    <>
      <BookShelf
        shelfName="Search results"
        books={books}
        shelves={shelves}
        updateBookShelf={updateBookShelf}
      />
    </>
  );
};

SearchResults.propTypes = {
  books: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
  ]),
  shelves: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default SearchResults;
