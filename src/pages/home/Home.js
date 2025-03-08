import React from "react";
import HomeImage from "./HomeImage";
import HomeDetails from "./HomeDetails";
import "../../styles/home.css";

const Home = () => {
  return (
    <div id = "home" className="home-container">
      {/* <div className="home-box"> */}
      <div className="home-image-container">
        <HomeImage />
      </div>
      <div className="home-details-container">
        <HomeDetails />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Home;
