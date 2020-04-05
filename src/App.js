import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import * as api from './utils/api';

function App() {
  const categories = [
    { id: 'currentlyReading', name: 'Currently Reading' },
    { id: 'wantToRead', name: 'Want to Read' },
    { id: 'read', name: 'Read' },
    { id: 'none', name: 'None' },
  ];

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    setLoading(true);
    let books = await api.getAll();
    books = books.filter((book) => book.imageLinks !== undefined);
    setBooks(books);
    setLoading(false);
  };

  const updateBookShelf = async (book, shelf) => {
    setLoading(true);
    await api.update(book, shelf);
    await getAllBooks();
    setLoading(false);
  };

  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Main
              books={books}
              loading={loading}
              shelves={categories}
              updateBookShelf={updateBookShelf}
            />
          )}
        />
        <Route
          path="/Search"
          exact
          render={() => (
            <Search
              books={books}
              shelves={categories}
              updateBookShelf={updateBookShelf}
            />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
