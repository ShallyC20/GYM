import React from "react";
import "./BottomNav.css";
import profileImage from "../public/profile.jpg";
import homeIcon from "../public/Home.png";
import statsIcon from "../public/stads.png";
import bellIcon from "../public/bell.png";
import usersIcon from "../public/Vector.png";

class BottomNav extends React.Component {
  render() {
    return (
      <div className="bottom-nav">
        <Link to="/social">
          <img src={usersIcon} alt="Users" className="icon" />
        </Link>
        <Link to="/">
          <img src={homeIcon} alt="Home" className="icon" />
        </Link>
        <img src={statsIcon} alt="Stats" className="icon" />
        <div className="bell-icon-wrapper">
          <img src={bellIcon} alt="Bell" className="icon" />
          <span className="notification-dot"></span>
        </div>
        <img src={profileImage} alt="Profile" className="profile-pic" />
      </div>
    );
  }
}

export default BottomNav;
