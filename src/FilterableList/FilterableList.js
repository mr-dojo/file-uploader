import React, { Component } from 'react';
import './FilterableList.css';
import ListItem from './ListItem/ListItem';

class FilterableList extends Component {
  render() {
    const list = this.props.files
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

export default FilterableList;
