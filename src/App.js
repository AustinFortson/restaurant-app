import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      {/*Navbar*/}
      <div class="navbar-fixed">
        <nav>
          <div class="nav-wrapper blue darken-3">
            <a href="/" class="logo">Seaside Seafood</a>
            <a href="#" class="brand-logo center">
              <img src="http://pngriver.com/wp-content/uploads/2017/12/download-free-fish-png-transparent-images-transparent-backgrounds-fish_PNG10536.png" alt="none" id="fish" />
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="#aboutUsDiv">About Us</a></li>
              <li><a href="#menuDiv">Menu</a></li>
              <li><a href="#comeVisitDiv">Come Visit</a></li>
            </ul>
          </div>
        </nav>
      </div>

      {/*Splash Video*/}
      <div class="row" id="splashVideoRow">
        <div className="splashVideoDiv">
          <video autoPlay muted id="video">
            <source src="https://mail.google.com/mail/u/0?ui=2&ik=744a95a85f&attid=0.1&permmsgid=msg-a:r3967161285619060440&th=16baead0ae21e354&view=att&disp=safe&realattid=f_jxkooaba0" type="video/mp4"></source>
          </video>
        </div>
      </div>

      {/*Site Title*/}
      <div className="row" id="titleDiv">
        <div className="col s12 flow-text"><h1 id="title">Seaside Seafood</h1></div>
        <img src="http://pngimg.com/uploads/lobster/lobster_PNG14254.png" alt="none" id="lobster" />
      </div>

      {/*About US*/}
      <div className="row" id="aboutUsDiv">
        <div class="col s12"><h3 className="flow-text" id="aboutUs">About Us</h3></div>
        {/*About Us Content*/}
        <div className="row">
          <div class="col s12 m6"><p className="flow-text" id="aboutUsText">Quis eu amet amet id laborum aute voluptate est aute dolor sit voluptate. Exercitation reprehenderit velit anim velit id. Eiusmod Lorem laborum ut nulla dolor pariatur cillum nisi ad sunt esse culpa. Laboris nulla id non reprehenderit. Sunt dolor id.</p></div>
          <div class="col s12 m6"><img src="https://www.rd.com/wp-content/uploads/2017/05/01-know-more-Facts-About-Seafood_530203870-Tema_Kud-ft.jpg" alt="none" id="aboutUsImg" /></div>
        </div>
      </div>

      {/*Menu*/}
      <div className="row" id="menuDiv">
        <div class="container" id="menuContainer">
          <div class="col s12"><h2 id="menuTitle">Menu</h2></div>
          {/*Specials*/}
          <div className="row" id="specialsRow">
            <div id="specials">Specials</div>
            <div class="col s3" id="specialsItem">Fish & Chips</div>
            <div class="col s3" id="specialsItem">Wood Grilled Shrimp</div>
            <div class="col s3" id="specialsItem">Maine Lobster</div>
            <div class="col s3" id="specialsItem">Fried Catfish</div>
          </div>
          {/*Dinner*/}
          <div className="row" id="dinnerRow">
            <div id="dinner">Dinner</div>
            <div class="col s3" id="dinnerItem">Fish Tacos</div>
            <div class="col s3" id="dinnerItem">Alfredo Shimp Pasta</div>
            <div class="col s3" id="dinnerItem">Snow Crab Legs</div>
            <div class="col s3" id="dinnerItem">7 oz. Sirloin</div>
          </div>
          {/*Lunch*/}
          <div className="row" id="lunchRow">
            <div id="lunch">Lunch</div>
            <div class="col s3" id="lunchItem">Shrimp Skewers</div>
            <div class="col s3" id="lunchItem">Chicken Salad</div>
            <div class="col s3" id="lunchItem">Popcorn Shrimp</div>
            <div class="col s3" id="lunchItem">Wild Caught Flounder</div>
          </div>

        </div>
      </div>
      {/*Come Visit*/}
      <div className="row" id="comeVisitDiv">
        <div class="col s12"><h2 class="flow-text" id="comeVisitTitle">Come Visit</h2></div>

        {/*Location*/}
        <div class="col s12"><h3 className="flow-text" id="location">Location</h3></div>
        <div className="row">
          <div class="col s12 flow-text" id="address">123 Coastal Ct.</div>
          {/*Map Img with redirect*/}
          <div class="container" id="map"><a target="_blank" href="https://www.google.com/maps/place/Panama+City+Beach,+FL/@30.2310532,-85.9421298,12z/data=!3m1!4b1!4m5!3m4!1s0x88938c6ac73a8595:0xd221b1d83d0cc52c!8m2!3d30.1765914!4d-85.8054879"><img src="http://www.hotelsaccommodation.com.au/images/maps/Panama%20City%20Beach-United%20States.gif" alt="none" id="mapImg" /></a></div>

          {/*Hours*/}
          <div class="col s12"><h3 className="flow-text" id="hours">Hours</h3></div>
          <div class="row">
            <div class="col s4 flow-text" id="time">Sunday: 10:00PM-9:00PM</div>
            <div class="col s4 flow-text" id="time">Monday-Friday: 10:00PM-10:00PM</div>
            <div class="col s4 flow-text" id="time">Saturday: 10:00PM-11:30PM</div>
          </div>
        </div>
      </div>

      <footer class="page-footer blue darken-4">
        <div class="container">
          <div class="row">
            <div class="col 16 s12">
            <ul id="nav-mobile" class="left hide-on-med-and-down flow-text">
              <li>seasideseafood@email.com</li>
              <li>555.555.5555</li>
              <li>Call for reservations</li>
            </ul>
            </div>
          </div>
        </div>
      </footer>


    </div>



  );
}

export default App;
