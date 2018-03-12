import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <NavLink exact to="/">Home</NavLink>
    {' '}
    <NavLink exact to="/about">About</NavLink>
    {' '}
    <NavLink exact to="/contact">Contact</NavLink>
    {' '}
    <NavLink exact to="/menu">Menu</NavLink>
  </nav>
)

export default Navbar;