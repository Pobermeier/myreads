import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo center">
            MyReads
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
