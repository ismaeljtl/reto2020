import React from 'react';

import './Navbar.css';

function Navbar(props) {
  return (
    <nav className="navbar navbar-light">
      <div className="navbar-brand" to="/">
        <h3>Reto API JSONPlaceHolder</h3>
      </div>
    </nav>
  );
}

export default Navbar;
