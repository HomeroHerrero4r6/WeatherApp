import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className={`col-md`}>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
