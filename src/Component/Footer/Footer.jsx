import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
  return (
    <div id="footer">
        <div className="footertop">
            <div className="box">
                <span id='contact1'> Contact Us</span>
                <span>+910000000000</span>
                <span>abc12345@gmail.com</span>
                <span>Address,city/India</span>
            </div>
           
            <div className="box">
                <span id='services'> Our Services</span>
                <span>Home</span>
                <span>Add Listing</span>
                <span>Rent</span>
            </div>
            <div className="box">
                <span id='quick'> Quick Links</span>
                <span>Knowledge Base</span>
                <span>FAQ</span>
                <span>Contact</span>
            </div>
            <div className="box">
                <span id='logo'> Private property Rental</span>
               <Link to={"/Contactus"}><button>Contact Us</button></Link>
            </div>
         </div>

         <div className="footerbottom">
                <span>Privacy Policy | |</span>
                <span>Use Of Terms</span>
            </div>

    </div>
  )
}

export default Footer
