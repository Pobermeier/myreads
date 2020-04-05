import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo center">
            <span className="material-icons">menu_book</span> MyReads
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
