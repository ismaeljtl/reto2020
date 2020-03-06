import React from 'react';

import './Navbar.css';
import logo from '../../assets/logo.svg';

function Navbar(props) {
  return (
    <nav className="navbar navbar-light">
      <div className="navbar-brand" to="/">
        <img src={logo} alt="Logo EDTeam"/>
        <h3>Reto Frontend 2020</h3>
      </div>
    </nav>
  );
}

export default Navbar;
