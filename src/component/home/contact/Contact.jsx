import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <div className='main-service' id='contact-us'>
        <div className="inner-service">
            <h2>Contact Us</h2>
            <p>Got any issue? Kindly contact us now by filling the inputs below</p>

            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Your name' />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Email Address</label>
                    <input type="email" placeholder='Your email' />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Phone Number</label>
                    <input type="tel" placeholder='Phone number' />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Purpose</label>
                    <input type="text" placeholder='Purpose of contacting' />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea name="" id="" rows={9}></textarea>
                </div>

                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact