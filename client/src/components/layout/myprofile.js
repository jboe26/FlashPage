import React, { Component } from "react";
import { setCurrentUser } from "../../actions/authActions";



class myprofile extends Component {
    render() {
      return ( 
        <div className="App">
            Welcome, {setCurrentUser} to FlashPage!
            Make your first post today!
            </div>
      )
    }
}

export default myprofile;