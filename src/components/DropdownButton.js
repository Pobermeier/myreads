import React from 'react';

const DropdownButton = () => {
  return (
    <div className="fixed-action-btn">
      <Link to={route} className="btn-floating btn-large red">
        <i className="material-icons">arrow_drop_down</i>
      </Link>
    </div>
  );
};

export default DropdownButton;
