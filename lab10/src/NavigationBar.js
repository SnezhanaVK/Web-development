import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/registration">Registration</Link>
        </li>
        <li>
          <Link to="/post-and-user-info">PostAndUserInfo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;