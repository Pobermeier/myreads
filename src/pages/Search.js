import React, { useState } from 'react';
import SearchBar from '../layout/SearchBar';
import FlatButton from '../components/FlatButton';
import SearchResults from '../components/SearchResults';
import Loader from '../layout/Loader';
import PropTypes from 'prop-types';
import * as api from '../utils/api';

const Search = ({ shelves, updateBookShelf }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async (query) => {
    setLoading(true);
    setBooks([]);
    if (query.trim() === '') {
      setLoading(false);
      return;
    }
    let books = await api.search(query);
    books = Array.isArray(books)
      ? books.filter((book) => book.imageLinks !== undefined)
      : books;
    setBooks(books);
    setLoading(false);
  };

  return (
    <div>
      <SearchBar search={searchBooks} />

      <div className="container">
        <FlatButton route="/" buttonText="Back to Main Page" />
        {loading ? (
          <Loader />
        ) : (
          <SearchResults
            books={books}
            shelves={shelves}
            updateBookShelf={updateBookShelf}
          />
        )}
      </div>
    </div>
  );
};

Search.propTypes = {
  shelves: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default Search;
