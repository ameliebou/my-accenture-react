import React from 'react';
import './episode.css';

const Episode = (props) => {
  return (
    <div className="episode">
      <p>{props.title}</p>
    </div>
  )
}

export default Episode;
