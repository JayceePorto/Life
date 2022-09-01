import React from 'react';
import {  Link } from "react-router-dom";
import './Navbar.css';

const Navbar= () =>{
  return (
  <div className='Navbar'>
        <li>
             <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/cats">ToDo</Link>
        </li>
        <li>
            <Link to="/sheeps">Budget</Link>
        </li>
        <li>
            <Link to="/goats">Fitness</Link>
        </li>
</div>
  );
}
export default Navbar;
