import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar bg-info" style={{ backgroundColor: '#e3f2fd' }}>
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to="/">
          <button type="button" className="btn btn-info">Bike App</button>
        </Link>
      </div>
      <div className="navbar-right ">
        <Link to="/addNewEntry">
          <button type="button" className="btn btn-info">Add New Entry</button>
        </Link>
      </div>
    </div>
  </nav>
);

export default Header;
