import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return(
      <div className="footer">
        <div className="footer-line">Made by Amélie Boudier for Accenture's coding challenge</div>
        <div className="links">
          <a href="https://github.com/ameliebou/my-accenture-react" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a>
          <a href="https://www.linkedin.com/in/amelie-boudier/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
          <a href="#banner"><i class="fas fa-chevron-circle-up" id="scroll-up"></i></a>
        </div>
      </div>
    )
  }
}

export default Footer;
