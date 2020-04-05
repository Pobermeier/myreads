import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ search }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <nav>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              type="search"
              placeholder="Search by book title or by author..."
              required
              onChange={(e) => {
                setSearchText(e.target.value);
                search(e.target.value);
              }}
              value={searchText}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i
              className="material-icons"
              onClick={() => {
                setSearchText('');
                search('');
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
  search: PropTypes.func.isRequired,
};

export default SearchBar;
