import React from 'react'
import { TbFileLike } from "react-icons/tb";

import "./Contact.css"

function Contactus() {
  return (
    <div id="contact">
         <form action="">
            <span id='Contacttitle'>Contact Page</span>
            <div className="list">
            <label htmlFor="name1">Username</label>
            <input type="text"  id='name1' required/>
            </div>
            <div className="list">
            <label htmlFor="mail">Email</label>
            <input type="text"  id='mail' required/>
            </div>
            <div className="list">
            <label htmlFor="mess">Message</label>
            <textarea id='mess'></textarea>

            </div>
            <button id='contactbtn'>Submit <TbFileLike />

            </button>
        </form>


    </div>
  )
}

export default Contactus