import React from "react";
import NavBar from "./NavBar.jsx";
import "./CardHome.css";
const CardHome = () => {
  return (
    <div class="cardContainer">
      <h1 class="headerName">Hola Gabriela!</h1>
      <h2 class="dailyDescription">
        No te olvides que el dia de hoy entrenas:
        <h2 class="textGreen">PIERNA</h2>
      </h2>
      <div className="announcesContainer">
        <div className="anuncios">
          <h2>ANUNCIOS</h2>
          <img
            src="https://i.ibb.co/0JdCwDJ/Image-3.png"
            alt="Image 3"
            border="0"
          />
          <div className="indicators">
            <button className="indicator"></button>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default CardHome;
