import React, { Component } from 'react';
import './ListItem.css';
import ControlBar from './ControlBar/ControlBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileImage,
  faFileAudio,
  faFileAlt,
  faFileVideo
 } from '@fortawesome/free-solid-svg-icons';

class ListItem extends Component {
  render() {

    const icons = {
      "jpg": faFileImage,
      "mov": faFileVideo,
      "txt": faFileAlt,
      "mp3": faFileAudio
    }

    return (
      <li className="ListItem">
        <div className="ListItem__icon">
          <div className="ListItem__circle">
            <FontAwesomeIcon icon={icons[this.props.fileType] || faFileAlt }/>
          </div>
        </div>
        <div className="ListItem__content">
          <div className="ListItem__heading">
            <p className="ListItem__title">{this.props.name}</p>
            <p className="ListItem__size">{this.props.size}</p>
          </div>
          <div className="ListItem__actions">
            <p className="ListItem__status">
              {this.props.status}
            </p>
            <ControlBar/>
          </div>
        </div>
      </li>
    );
  }
}

export default ListItem;