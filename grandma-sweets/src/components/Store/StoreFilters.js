import React from 'react';
const StoreFilters = ({ filters: filterList, activeFilter, handelFilters }) => {
  const onFilterClick = (e, type) => {
    e.preventDefault();
    handelFilters(type);
  };

  return (
    <div className="sortBtn">
      {filterList.map((filter) => (
        <button
          key={filter}
          className={`btn btn-black filter-btn ${
            activeFilter === filter ? 'active' : ''
          }`}
          onClick={(e) => onFilterClick(e, filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default StoreFilters;
