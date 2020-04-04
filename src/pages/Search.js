import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const Search = () => {
  return (
    <div>
      <SearchBar />

      <div className="container">
        <Link
          to="/"
          className="waves-effect waves-teal btn"
          style={{
            margin: '20px 0px 0px',
            backgroundColor: '#e4e4e4',
            color: '#000',
          }}
        >
          Back to Main Page
        </Link>
        <h1>Search</h1>
      </div>
    </div>
  );
};

export default Search;
