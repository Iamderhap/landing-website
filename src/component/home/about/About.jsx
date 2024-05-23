import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className='about-section' id='about'>
        <div className='inner'>
            <h2>About Us</h2>
            <p>At Falcon Pay, we're more than just a payment gateway – we're your trusted partner in navigating the digital economy. Our story began with a simple mission: to revolutionize the way businesses transact online. Since our inception, we've been dedicated to providing innovative solutions that empower businesses of all sizes to thrive in the digital landscape.</p>
            <p>With a relentless focus on security, reliability, and user experience, we've built a platform that seamlessly integrates with your business, enabling you to accept payments with confidence. But we're not just about transactions; we're about building relationships. Our team of experts is committed to providing unparalleled support and guidance every step of the way.</p>
            <p>Whether you're a startup looking to make your mark, a growing business scaling new heights, or an established enterprise seeking efficiency and security, SwiftPay has you covered. Join us as we continue to redefine the future of payments and empower businesses to succeed in the digital age.</p>
            <div>
                <button className='btn'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default About