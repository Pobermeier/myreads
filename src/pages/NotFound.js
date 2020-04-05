import React from 'react';
import Navbar from '../layout/Navbar';
import FlatButton from '../components/FlatButton';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>404 | Page Not Found</h2>
        <FlatButton route="/" buttonText="Back to Main Page" />
      </div>
    </>
  );
};

export default NotFound;
