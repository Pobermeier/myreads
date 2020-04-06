import React, { useState, useEffect } from 'react';
import SearchBar from '../layout/SearchBar';
import FlatButton from '../components/FlatButton';
import SearchResults from '../components/SearchResults';
import Loader from '../layout/Loader';
import PropTypes from 'prop-types';
import * as api from '../utils/api';

const Search = ({ shelves, updateBookShelf }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setBooks({});
    async function updateSearch() {
      setLoading(true);
      let books = [];

      if (searchText.length > 0 && searchText !== '') {
        books = await api.search(searchText);
        books =
          Array.isArray(books) &&
          books.length > 0 &&
          books.filter((book) => book.imageLinks !== undefined);
      }
      setBooks(books);
      setLoading(false);
    }

    updateSearch();
  }, [searchText]);

  return (
    <div>
      <SearchBar searchText={[searchText]} setSearchText={setSearchText} />

      <div className="container">
        <FlatButton route="/" buttonText="Back to Main Page" />
        {loading ? (
          <Loader />
        ) : (
          <SearchResults
            searchText={searchText}
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
