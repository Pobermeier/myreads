import React from 'react';
import Navbar from '../layout/Navbar';
import AddButton from '../components/AddButton';

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Main</h1>
      </div>
      <AddButton route="/search" />
    </div>
  );
};

export default Main;
