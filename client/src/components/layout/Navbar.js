import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">account_circle</i>
              FlashPage
            </Link>
            <Link
            to="/newsfeed"
            style={{
              fontFamily: "monospace"
            }}
            className="col s5 brand-logo left black-text">
              <i className="material-icons">newspaper</i>
              News Feed
            </Link>
            <Link
            to="/myprofile"
            style={{
              fontFamily: "monospace"
            }}
            className="col s5 brand-logo right black-text">
              <i className="material-icons">person</i>
              My Profile
            </Link>
          </div>
        </nav>
      </div>

      
    );

    
  }
}
export default Navbar;