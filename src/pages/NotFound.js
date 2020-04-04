import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>404 | Page Not Found</h1>
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
      </div>
    </>
  );
};

export default NotFound;
