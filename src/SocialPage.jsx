import React from 'react';
import './SocialPage.css';

const SocialPage = () => {
  return (
    <div className="social-page">
      <h1>Social</h1>
      <div className="connected-people">
        <div className="connected-header">personas conectadas</div>
        <div className="connected-users">
          <div className="user-profile online">
            <img src="./62.png" alt="Profile 1" className="user-img" />
            <span>Julian</span>
          </div>
          <div className="user-profile">
            <img src="./61.png" alt="Profile 2" className="user-img" />
            <span>Daniel</span>
          </div>
          <div className="user-profile">
            <img src="./66.png" alt="Profile 3" className="user-img" />
            <span>Ernesto</span>
          </div>
          <div className="user-profile">
            <img src="./64.png" alt="Profile 4" className="user-img" />
            <span>Julio</span>
          </div>
          <div className="user-profile">
            <img src="./65.png" alt="Profile 5" className="user-img" />
            <span>Marcelo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPage;
