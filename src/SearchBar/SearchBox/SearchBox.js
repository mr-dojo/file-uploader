import React, { Component } from 'react';
import './SearchBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBox extends Component {
  render() {
    return (
      <form className="SearchBox">
        <FontAwesomeIcon icon={faSearch}/>
        <input placeholder="Search term" value={this.props.searchTerm}/>
        <button type='submit'>Filter</button>
      </form>   
    );
  }
}

export default SearchBox;