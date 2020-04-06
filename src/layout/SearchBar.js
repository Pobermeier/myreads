import React from 'react';
import PropTypes from 'prop-types';
import { Debounce } from 'react-throttle';

const SearchBar = ({ setSearchText, searchText }) => {
  const triggerSearch = (searchValue) => {
    setSearchText(searchValue);
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <Debounce time="200" handler="onChange">
              <input
                type="search"
                id="searchInput"
                placeholder="Search by book title or by author..."
                required
                onChange={(e) => {
                  triggerSearch(e.target.value);
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') e.preventDefault();
                }}
              />
            </Debounce>
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i
              className="material-icons"
              onClick={() => {
                triggerSearch('');
                document.getElementById('searchInput').value = '';
              }}
            >
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  setSearchText: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default SearchBar;
