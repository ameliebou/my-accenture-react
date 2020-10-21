import React, { Component } from 'react';
import logo from './logo.svg';
import Episode from './Episode/episode';
import './App.css';

class App extends Component {
  state = {
    episodes: [
      {
        image: "https://www.accenture.com/t00010101T000000Z__w__/de-de/_acnmedia/Accenture/Redesign-Assets/Careers/Images/Content_Images/20/Accenture-ASG-Esports-Destany-400x225.png",
        title: "Zuhause beim besten Smasher der Schweiz, Destan „Destany“.",
        url: "https://www.youtube-nocookie.com/embed/LpZqsICdSaM?rel=0&autoplay=1&enablejsapi=1"
      },
      {
        image: "www.accenture.com/t00010101T000000Z__w__/de-de/_acnmedia/Accenture/Redesign-Assets/Careers/Images/Content_Images/21/Accenture-ASG-Esports-Maestra-400x225-new.jpg",
        title: "Marlies „Maestra“ ist das österreichische LoL Powerhaus mit Master in Psychologie.",
        url: "https://www.youtube-nocookie.com/embed/Kh4Wn7wY03k?rel=0&autoplay=1&enablejsapi=1"
      },
      {
        image: "www.accenture.com/t00010101T000000Z__w__/de-de/_acnmedia/Accenture/Redesign-Assets/Careers/Images/Content_Images/20/Accenture-Megabit-Erhano-Content.jpg",
        title: "Echtes Fussballwissen darf bei Michael “MegaBit” und Erhan “Dr. Erhano” nicht fehlen.",
        url: "https://www.youtube-nocookie.com/embed/xAuZ2PVOXv4?rel=0&autoplay=1&enablejsapi=1"
      },
      {
        image: "www.accenture.com/t00010101T000000Z__w__/de-de/_acnmedia/Accenture/Redesign-Assets/Careers/Images/Content_Images/20/Accenture-jenax-thumbnail.jpg",
        title: "Für „Jenax“ kam das Kompetitive beim LoL Zocken ganz natürlich.",
        url: "https://www.youtube-nocookie.com/embed/z5RQMsrvcjo?rel=0&autoplay=1&enablejsapi=1"
      }
    ],
    showEpisodes: false
  }

  toggleEpisodes = () => {
    const doesShow = this.state.showEpisodes;
    this.setState({showEpisodes: !doesShow});
  }

  render() {
    let episodes = null;

    if (this.state.showEpisodes) {
      episodes = (
        <div className="grid">
          {this.state.episodes.map((episode) => {
            return <Episode key={episode.title} title={episode.title} image={episode.image} url={episode.url}></Episode>
          })}
        </div>
      )
    }


    return (
      <div className="App">
        <header className="banner">
          <div className="App-header">
            <div className="App-title">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>MY ACCENTURE</h1>
            </div>
            <p className="header-caret">
              <i className="fas fa-angle-down"></i>
            </p>
          </div>
        </header>
        <div className="container">
          <div className="episode-title" onClick={this.toggleEpisodes}>
            <h2>Accenture Profiles</h2>
            <p>With the help of Moritz from the Rocket Beans, Accenture had a chat with a few pro gamers. They are sharing some very interesting insights about their career.</p>
          </div>
          {episodes}
        </div>
      </div>
    );
  }
}

export default App;
