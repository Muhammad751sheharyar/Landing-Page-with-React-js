import React from 'react'
import './Navbar.css';
import Button from '../Button/Button';
export default function Navbar() {
  return (
    <div>
      <div class="frontimage">
        <div class="Header">
          <div class="logo"></div>
          <div class="navigation">
            <ul>
              <li>Home</li>
              <li><a href='#AboutUs'>About</a></li>
              <li><a href='#Arrival'>Arrval</a></li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='loginform'>

              < Button />

          </div>
        </div>
      </div>
      </div>
  )
}