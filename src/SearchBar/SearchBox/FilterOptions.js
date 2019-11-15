import React, { Component } from 'react';
import './FilterOptions.css';

class FilterOptions extends Component {
  render() {
    return (
      <div className="FilterOptions">
        <div className="FilterOptions__option">
          <label htmlFor="filter_all">
            <input 
              type="radio" 
              checked={this.props.filterOption === "All"} 
              value="All" 
              id="filter_all" 
              name="filter"
              onChange={e => this.props.handleFilter(e.target.value)}
            />
            All
          </label>
        </div>
        <div className="FilterOptions__option">
          <label htmlFor="filter_uploaded">
            <input 
              type="radio"
              checked={this.props.filterOption === "Uploaded"} 
              value="Uploaded" 
              id="filter_uploaded" 
              name="filter"
              onChange={e => this.props.handleFilter(e.target.value)}
            />
            Uploaded
          </label>
        </div>
        <div className="FilterOptions__option">  
          <label htmlFor="filter_synced">
            <input 
              type="radio" 
              checked={this.props.filterOption === "Synced"} 
              value="Synced" 
              id="filter_synced" 
              name="filter"
              onChange={e => this.props.handleFilter(e.target.value)}
            />
            Synced
          </label>
        </div>
        <div className="FilterOptions__option">  
          <label htmlFor="filter_new">
            <input 
              type="radio" 
              checked={this.props.filterOption === "New"} 
              value="New" 
              id="filter_new" 
              name="filter"
              onChange={e => this.props.handleFilter(e.target.value)}
            />
            New
          </label>
        </div>
      </div>
    );
  }
}

export default FilterOptions;