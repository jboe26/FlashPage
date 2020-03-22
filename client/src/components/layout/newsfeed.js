import React, { Component } from "react";
import { setCurrentUser } from "../../actions/authActions";



class newsfeed extends Component {
    render() {
      return ( 
        <div className="App">
            Welcome, {setCurrentUser} to FlashPage!
            Make your first post today!
            </div>
      )
    }
}

export default newsfeed;