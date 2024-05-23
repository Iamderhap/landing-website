import React from 'react';
import "./Nav.css";
import { CiMenuFries } from "react-icons/ci";
import {Link} from "react-dom"
const Nav = () => {
  return (

    <>
    
        <nav className='nav'>
            <div className="logo">
                <h2><a href="/">Falcon Pay</a></h2>
            </div>

            <ul className="nav-items">
                <li><a href="#about">About</a> </li>
                <li><a href="#our-service">Our Service</a></li>
                <li><a href="#contact-us">Contact Us</a></li>
            </ul>

            <button className='toggle'> <CiMenuFries /> </button>
        </nav>

    <ul className="mobile-nav-items">
        <li><a href="#about">About</a> </li>
        <li><a href="#our-service">Our Service</a></li>
        <li><a href="#contact-us">Contact Us</a></li>
    </ul>

    </>
    
  )
}

export default Nav