import React, { Component } from 'react';
import './badge.css';

class Badge extends Component {

  state = { showDescription: false };

  toggleDescription = () => {
    const doesShow = this.state.showDescription;
    this.setState({showDescription: !doesShow});
  }

  showDescription = () => {
    this.setState({showDescription: true});
  };

  hideDescription = () => {
    this.setState({showDescription: false});
  };

  render() {

    let description = null;

    if (this.state.showDescription) {
      description = (
        <div className="badge-description">
          <p>{this.props.description}</p>
        </div>
      )
    }

    const style = { backgroundImage: `url('${this.props.picture}')` };

    return (
      <div className="big-badge">
        <div className="badge" style={style} onClick={this.toggleDescription} onMouseOver={this.showDescription} onMouseOut={this.hideDescription}>
          <h2>{this.props.title}</h2>
        </div>
        {description}
      </div>
    )
  }
}

export default Badge;
