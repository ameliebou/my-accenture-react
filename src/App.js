import React, { Component } from 'react';
import logo from './logo.svg';
import Episode from './Episode/episode';
import Badge from './Badge/badge';
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
    showEpisodes: false,
    badges: [
      {title: "Mission", description:"Accenture offers Strategy, Consulting, as well as Interactive, Technology and Operations services"},
      {title: "Numbers", description:"505K employees - 7K patents - 200 cities - 51 countries"},
      {title: "Impact", description:"Aim at changing to a low-carbon economy, Supports more than 3 million people in their career"},
      {title: "Profiles", description:"With the help of Moritz from the Rocket Beans, Accenture had a chat with a few pro gamers. They are sharing some very interesting insights about their career."}
    ]
  }

  toggleEpisodes = () => {
    const doesShow = this.state.showEpisodes;
    this.setState({showEpisodes: !doesShow});
  };


  render() {
    let episodes = null;

    if (this.state.showEpisodes) {
      episodes = (
        <div className="grid">
          {this.state.episodes.map((episode) => {
            return <Episode key={episode.title} title={episode.title} image={episode.image} url={episode.url}></Episode>
          })}
        </div>
      );
    };

    const badges = (
      <div className="badges">
        {this.state.badges.map((badge) => {
          if (badge.title === "Profiles") {
            return (
              <div className="badge-row" onClick={this.toggleEpisodes}>
                <Badge title={badge.title}></Badge>
                <p>{badge.description}</p>
              </div>
            )
          } else {
            return (
              <div className="badge-row">
                <Badge title={badge.title}></Badge>
                <p>{badge.description}</p>
              </div>
            )
          }
        })}
      </div>
    )


    return (
      <div className="App">
        <header className="banner">
          <div className="App-header">
            <div className="App-title">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>MY ACCENTURE</h1>
            </div>
            <h2 className="App-subline">Let there be change</h2>
            <p className="header-caret">
              <i className="fas fa-angle-down"></i>
            </p>
          </div>
        </header>
        <div className="container">
          {badges}

          {episodes}
        </div>
      </div>
    );
  }
}

export default App;
