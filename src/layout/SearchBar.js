import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ setSearchText, searchText }) => {
  const triggerSearch = (searchValue) => {
    setSearchText(searchValue);
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              type="search"
              placeholder="Search by book title or by author..."
              required
              onChange={(e) => triggerSearch(e.target.value)}
              value={searchText}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons" onClick={() => triggerSearch('')}>
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
