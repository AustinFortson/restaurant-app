import React from 'react';
import './footer.css'

export default function Footer() {

  return (
    <React.Fragment>
    <div className="footer">
      <footer className="page-footer blue darken-4">
        <div className="container">
          <div className="row">
            <div className="col 16 s12">
            <ul id="nav-mobile" className="left flow-text">
              <li>seasideseafood@email.com</li>
              <li>555.555.5555</li>
              <li>Call for reservations</li>
            </ul>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </React.Fragment>
  );
}