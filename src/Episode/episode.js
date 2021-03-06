import React, { Component } from 'react';
import './episode.css';

class Episode extends Component {
  state = {
    showVideo: false
  };

  playVideo = () => {
    const doesShow = this.state.showVideo;
    this.setState({showVideo: !doesShow});
  };

  render() {
    let video = null;
    const style = {
      backgroundImage: `url(${process.env.PUBLIC_URL}${this.props.image})`
    };
    let card = (
      <div className="card-episode" style={style} onClick={this.playVideo}>
        <p className="card-text"></p>
      </div>
    )

    if (this.state.showVideo) {
      const videoUrl = this.props.url
      video = (
        <div className="video-container">
          <iframe src={videoUrl} controls allowfullscreen="true" class="iframe-episode"></iframe>
          <i class="fas fa-undo video-arrow" onClick={this.playVideo}></i>
        </div>
      );
      card = null;
    } else {
      card
    }

    return (
      <div>
        {card}
        {video}
      </div>
    )
  }
}

export default Episode;
