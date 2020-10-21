import React, { Component } from 'react';
import './episode.css';

class Episode extends Component {
  render() {
    const style = {
      backgroundImage: `url('${this.props.image}')`
    };
    const videoUrl = this.props.url
    return (
      <div className="card-episode">
        <iframe src={videoUrl} controls></iframe>
        <p className="card-text">{this.props.title}</p>
      </div>
    )
  }
}

export default Episode;
