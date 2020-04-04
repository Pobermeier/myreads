import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AddButton = ({ route }) => {
  return (
    <div className="fixed-action-btn">
      <Link to={route} className="btn-floating btn-large red">
        <i className="large material-icons">add</i>
      </Link>
    </div>
  );
};

AddButton.propTypes = {
  route: PropTypes.string.isRequired,
};

export default AddButton;
