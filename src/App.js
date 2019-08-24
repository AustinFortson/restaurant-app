import React from 'react';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Lobster from './components/Images/lobster.png';
import Food from './components/Images/Food.jpg';
import MapPic from './components/Images/Map.jpg';
import WaterSplash from './components/Images/BlueWaterSplash.mp4';
import './App.css';

function App() {
  return (
    <div className="App">

      {/*Navbar*/}
      <Navbar/>

      {/*Splash Video*/}
      <div className="row" id="splashVideoRow">
        <div className="splashVideoDiv">
          <video autoPlay muted id="video">
            <source src={WaterSplash} type="video/mp4"></source>
          </video>
        </div>
      </div>

      {/*Site Title*/}
      <div className="row" id="titleDiv">
        <div className="col s12 flow-text"><h1 id="title">Seaside Seafood</h1></div>
        <img src={Lobster} alt="" id="lobster" />
      </div>

      {/*About US*/}
      <div className="row" id="aboutUsDiv">
        <div className="col s12"><h3 className="flow-text" id="aboutUs">About Us</h3></div>
        {/*About Us Content*/}
        <div className="row">
          <div className="col s12 m6"><p className="flow-text" id="aboutUsText">Quis eu amet amet id laborum aute voluptate est aute dolor sit voluptate. Exercitation reprehenderit velit anim velit id. Eiusmod Lorem laborum ut nulla dolor pariatur cillum nisi ad sunt esse culpa. Laboris nulla id non reprehenderit. Sunt dolor id.</p></div>
          <div className="col s12 m6"><img src={Food} alt="" id="aboutUsImg" /></div>
        </div>
      </div>

      {/*Menu*/}
      <div className="row" id="menuDiv">
        <div className="container" id="menuContainer">
          <div className="col s12"><h2 id="menuTitle">Menu</h2></div>
          {/*Specials*/}
          <div className="row" id="specialsRow">
            <div id="specials">Specials</div>
            <div className="col s3" id="specialsItem">Fish & Chips</div>
            <div className="col s3" id="specialsItem">Wood Grilled Shrimp</div>
            <div className="col s3" id="specialsItem">Maine Lobster</div>
            <div className="col s3" id="specialsItem">Fried Catfish</div>
          </div>
          {/*Dinner*/}
          <div className="row" id="dinnerRow">
            <div id="dinner">Dinner</div>
            <div className="col s3" id="dinnerItem">Fish Tacos</div>
            <div className="col s3" id="dinnerItem">Alfredo Shimp Pasta</div>
            <div className="col s3" id="dinnerItem">Snow Crab Legs</div>
            <div className="col s3" id="dinnerItem">7 oz. Sirloin</div>
          </div>
          {/*Lunch*/}
          <div className="row" id="lunchRow">
            <div id="lunch">Lunch</div>
            <div className="col s3" id="lunchItem">Shrimp Skewers</div>
            <div className="col s3" id="lunchItem">Chicken Salad</div>
            <div className="col s3" id="lunchItem">Popcorn Shrimp</div>
            <div className="col s3" id="lunchItem">Wild Caught Flounder</div>
          </div>

        </div>
      </div>
      {/*Come Visit*/}
      <div className="row" id="comeVisitDiv">
        <div className="col s12"><h2 className="flow-text" id="comeVisitTitle">Come Visit</h2></div>

        {/*Location*/}
        <div className="col s12"><h3 className="flow-text" id="location">Location</h3></div>
        <div className="row">
          <div className="col s12 flow-text" id="address">123 Coastal Ct.</div>
          {/*Map Img with redirect*/}
          <div className="container" id="map"><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Panama+City+Beach,+FL/@30.2310532,-85.9421298,12z/data=!3m1!4b1!4m5!3m4!1s0x88938c6ac73a8595:0xd221b1d83d0cc52c!8m2!3d30.1765914!4d-85.8054879"><img src={MapPic} alt="" id="mapImg" /></a></div>

          {/*Hours*/}
          <div className="col s12"><h3 className="flow-text" id="hours">Hours</h3></div>
          <div className="row">
            <div className="col s4 flow-text" id="time">Sunday: 10:00PM-9:00PM</div>
            <div className="col s4 flow-text" id="time">Monday-Friday: 10:00PM-10:00PM</div>
            <div className="col s4 flow-text" id="time">Saturday: 10:00PM-11:30PM</div>
          </div>
        </div>
      </div>

      {/*Footer*/}
      <Footer/>


    </div>



  );
}

export default App;
