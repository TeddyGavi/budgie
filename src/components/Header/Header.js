import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

// ?How to pass in title of page with props

const Header = (props) => {


  return (
    <div className="nav-header">
      <div className="nav-left">
          <Link to="/stats">
          <img src='https://github.com/BrianKendalBucek/budgie/blob/main/assets/budgie-icon.png?raw=true' className="nav-logo" alt="Budgie logo" />
          </Link>
      </div>    
      <div className="view-title">
        <p>{props.viewTitle}</p>
      </div>
      <div className="nav-right">
        <p>btn</p>
      </div>
    </div>
  )
}


export default Header;