import React from 'react';

export const BacktoTop = ({ onClick }) => {
  return (
    <div className="back-to-top" onClick={onClick}>
      <i className="fas fa-arrow-up"></i>
    </div>
  );
};
