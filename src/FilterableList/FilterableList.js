import React, { Component } from 'react';
import './FilterableList.css';
import ListItem from './ListItem/ListItem';

export default class FilterableList extends Component {
  render() {
    const { searchTerm, filterOption } = this.props;
    const list = this.props.files
      .filter(file => this.file.name.includes(searchTerm)
        && (filterOption === 'All' || file.status === filterOption))
      .map((file, key) => <ListItem {...file} key={key} />);
    return (
      <ul className="FilterableList">
        {list}
      </ul>
    );
  }
}

FilterableList.defaultProps = {
  files: []
};