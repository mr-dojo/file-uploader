import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';


export default class App extends Component {
  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }
  updateFilterOption(option) {
    this.setState({
      filterOption: option
    })
  }
  static defaultProps = {
    files: [],
  }
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'cats',
      filterOption: 'Uploaded'
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          handleUpdate={term => this.updateSearchTerm(term)}
          handleFilter={option => this.updateFilterOption(option)}
        />
        <FilterableList
          files={this.props.files}  
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
        />
      </div>
    );
  }
}

