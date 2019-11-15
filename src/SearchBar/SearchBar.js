import React, { Component } from 'react';
import './SearchBar.css';
import SearchBox from './SearchBox/SearchBox';
import FilterOptions from './SearchBox/FilterOptions';

class SearchBar extends Component {
  render() {
    return (
      <section className="SearchBar">
        <header className="SearchBar__heading">
          <h1>File Uploader</h1>
        </header>
        <div className="SearchBar__controls">
          <SearchBox/>
          <FilterOptions/>
        </div>
      </section>
    );
  }
}

export default SearchBar;