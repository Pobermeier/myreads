import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FlatButton = ({ route, buttonText }) => (
  <Link
    to={route}
    className="waves-effect waves-teal btn"
    style={{
      margin: '20px 0px 0px',
      backgroundColor: '#e4e4e4',
      color: '#000',
    }}
  >
    {buttonText}
  </Link>
);

FlatButton.propTypes = {
  route: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default FlatButton;
