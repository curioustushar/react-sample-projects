import React, { useRef, useState } from 'react';

function SearchInput({ handelSearch }) {
  const searchInputRef = useRef(null);
  const [searchText, setSearchText] = useState('');
  const onSearch = (e) => {
    e.preventDefault();
    searchInputRef.current.focus();
    handelSearch(searchText);
  };
  const onKeyPress = (e) => {
    if (e.target.charCode === 13) {
      e.preventDefault();
      handelSearch(searchText);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    handelSearch(searchText);
  };
  return (
    <div className="search-input">
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <span className="input-group-text search-box" onClick={onSearch}>
            <i className="fas fa-search"></i>
          </span>
          <input
            type="text"
            ref={searchInputRef}
            aria-label="search"
            className="form-control"
            placeholder="item...."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={onKeyPress}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchInput;
