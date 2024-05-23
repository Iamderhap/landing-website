import React from 'react';
import './Hero.css';
import heroimg from "../../../../images/falconpayhero.png";
import { IoIosArrowDropright } from "react-icons/io";


const Hero = () => {
  return (
    <section className='hero'>
        <div className="left">
            <h1>Welcome To Falcon Pay</h1>
            <div>
                <p>Your financial gateway to seemless transactions ..</p>
                <p>Whether you're a small business owner, an e-commerce entrepreneur, or part of a large enterprise, Falcon Pay ensures your transactions are swift, secure, and hassle-free.</p>
            
            </div>
            <div>
                <button className='btn'>Get Started <IoIosArrowDropright /></button>
            </div>
        </div>
        <div className="right">
            <img src={heroimg} alt="hero section image" className='hero-img' />
        </div>
    </section>
  )
}

export default Hero