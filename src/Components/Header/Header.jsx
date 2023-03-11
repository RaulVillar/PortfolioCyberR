import * as React from 'react';
import '../Header/Header.css';

export default function Header() {

  return (
    <div>
      <nav>
        <h1>Raul Software Dev</h1>
        <ul className='navbar-options'>
          <li className='navbar-options-hover'>Home</li>
          <li className='navbar-options-hover'>About Me</li>
          <li className='navbar-options-hover'>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

