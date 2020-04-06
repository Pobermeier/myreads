import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

const SearchResults = ({ books, shelves, updateBookShelf, searchText }) => {
  if (books === undefined || searchText === '') {
    return (
      <h4 style={{ textAlign: 'center', marginTop: '25vh' }}>
        Enter a value in the search box above to discover new books to read...
      </h4>
    );
  } else if (!Array.isArray(books) || books.length === 0 || books === []) {
    return (
      <h4 style={{ textAlign: 'center', marginTop: '25vh' }}>
        No results found...
      </h4>
    );
  } else {
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
  }
};

SearchResults.propTypes = {
  searchText: PropTypes.string.isRequired,
  books: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  shelves: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default SearchResults;
