import React, { Component } from 'react';
import './badge.css';

class Badge extends Component {
  render() {

    return (
      <div className="badge">
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}

export default Badge;
