import React, { Component } from 'react';
import './badge.css';

class Badge extends Component {

  render() {

    let description = null;

    const style = {
      backgroundImage: `url('${this.props.picture}')`
    };

    return (
      <div>
        <div className="badge" style={style}>
          <h2>{this.props.title}</h2>
        </div>
      </div>
    )
  }
}

export default Badge;
