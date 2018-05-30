import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import TrashIcon from '../trash.svg';

class Trash extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired
  }

  showTrash = () => {
    if (this.props.isVisible) {
      return <img src={ TrashIcon } alt="Trash" className="trash"></img>;
    }
  }

  render() {
    return (
      <div className="bin">
        {this.showTrash()}
      </div>
    );
  }
}

export default Trash;
