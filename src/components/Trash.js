import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import TrashIcon from '../trash.svg';

class Trash extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onTrashClicked: PropTypes.func
  }

  showTrash = () => {
    if (this.props.isVisible) {
      return <img onClick={ this.onTrashClicked } src={ TrashIcon } alt="Trash" className="trash"></img>;
    }
  }

  onTrashClicked = () => {
    this.props.onTrashClicked();
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
