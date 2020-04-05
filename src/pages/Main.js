import React from 'react';
import Navbar from '../layout/Navbar';
import AddButton from '../components/AddButton';
import BookShelf from '../components/BookShelf';
import PropTypes from 'prop-types';
import Loader from '../layout/Loader';

const Main = ({ books, loading, shelves, updateBookShelf }) => {
  return (
    <div>
      <Navbar />
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <>
            {shelves.map((shelf) => {
              if (shelf.id === 'none') return null;
              return (
                <BookShelf
                  key={shelf.id}
                  books={books.filter((book) => book.shelf === shelf.id)}
                  shelfName={shelf.name}
                  shelves={shelves}
                  updateBookShelf={updateBookShelf}
                />
              );
            })}
          </>
        )}
      </div>
      <AddButton route="/search" />
    </div>
  );
};

Main.propTypes = {
  books: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  shelves: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default Main;
