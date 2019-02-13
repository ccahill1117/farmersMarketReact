import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Farmers Market - Avery Organics</h1>
      <Link to="/">Week schedule</Link> | <Link to="/Year">Month by month avails</Link>
    </div>
  );
}

export default Header;
