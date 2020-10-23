import React, { Component } from 'react';
import logo from './logo.svg';
import Episode from './Episode/episode';
import Badge from './Badge/badge';
import Footer from './Footer/footer';
import './App.css';

class App extends Component {
  state = {
    episodes: [
      {
        image: "jenax.jpg",
        title: "Für „Jenax“ kam das Kompetitive beim LoL Zocken ganz natürlich.",
        url: "https://www.youtube-nocookie.com/embed/z5RQMsrvcjo?rel=0&autoplay=1&enablejsapi=1"
      },
      {
        image: "megabit_erhano.jpg",
        title: "Echtes Fussballwissen darf bei Michael “MegaBit” und Erhan “Dr. Erhano” nicht fehlen.",
        url: "https://www.youtube-nocookie.com/embed/xAuZ2PVOXv4?rel=0&autoplay=1&enablejsapi=1"
      },
      {
        image: "maestra.jpg",
        title: "Marlies „Maestra“ ist das österreichische LoL Powerhaus mit Master in Psychologie.",
        url: "https://www.youtube-nocookie.com/embed/Kh4Wn7wY03k?rel=0&autoplay=1&enablejsapi=1"
      },
      {
        image: "destany.png",
        title: "Zuhause beim besten Smasher der Schweiz, Destan „Destany“.",
        url: "https://www.youtube-nocookie.com/embed/LpZqsICdSaM?rel=0&autoplay=1&enablejsapi=1"
      }
    ],
    showEpisodes: false,
    badges: [
      {
        title: "Mission",
        description:"Accenture offers Strategy, Consulting, as well as Interactive, Technology and Operations services",
        picture: "https://www.accenture.com/_acnmedia/Thought-Leadership-Assets/Images/mainpage/accenture-eye-bg"
      },
      {
        title: "Numbers",
        description:"505K employees - 7K patents - 200 cities - 51 countries",
        picture: "https://www.accenture.com/_acnmedia/Thought-Leadership-Assets/Images/aboutpage/Accenture-bg-1"
      },
      {
        title: "Impact",
        description:"Aims at changing to a low-carbon economy, Supports more than 3 million people in their career",
        picture: "https://www.accenture.com/_acnmedia/Thought-Leadership-Assets/Images/aboutpage/accenture-bg-2"
      }
    ]
  }

  toggleEpisodes = () => {
    const doesShow = this.state.showEpisodes;
    this.setState({showEpisodes: !doesShow});
  };

  render() {
    let episodes = null;
    let caretStyle = null;


    if (this.state.showEpisodes) {
      caretStyle = {transform: "rotate(180deg)"}
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
          return (
            <Badge key={badge.title} title={badge.title} picture={badge.picture} description={badge.description}></Badge>
          )
        })}
      </div>
    )


    return (
      <div className="App">
        <header className="banner" id="banner">
          <div className="App-header">
            <div className="App-title">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>MY ACCENTURE</h1>
            </div>
            <h2 className="App-subline">Let there be change</h2>
            <p className="header-caret">
              <a href="#container"><i className="fas fa-angle-down"></i></a>
            </p>
          </div>
        </header>
        <div className="container" id="container">
          {badges}
        </div>
          <div className="profiles">
            <div className="profiles-text">
              <div className="profiles-title">
                <h2>Accenture Profiles</h2>
                <i class="fas fa-angle-down profiles-caret" style={caretStyle} onClick={this.toggleEpisodes}></i>
              </div>
              <p>Accenture cares a lot about helping people with their career. Which is why they are offering a series of interviews with some German pro gamers.</p>
            </div>
          </div>
          {episodes}
        <Footer/>
      </div>
    );
  }
}

export default App;
