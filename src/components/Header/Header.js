import { NavLink } from 'react-router-dom';
import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div>
      <header>
        <NavLink to="/dogs"> Home </NavLink>
      </header>
    </div>
  );
}
