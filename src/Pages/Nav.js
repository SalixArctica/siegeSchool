import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Nav.scss';

const Nav = () => {
  return (
    <div className="nav">
      <div>
        <Link to='/'><h1>SIEGE SCHOOL</h1></Link>
      </div>    
      <div className='links'>
        <Link to='/'>Play</Link>
        <Link to='/'>About</Link>
      </div>
    </div>
  );
}

export default Nav;
