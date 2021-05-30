import React from 'react'
import '../App.css'

function Navbar() {
    return <div className="Navbar">
        
        <div className="leftSide">
        <div className="links">
        <a href="/home">Home</a>
        <a href="/feedback">Feedback</a>
        <a href="/AboutUs">AboutUs</a>
        <a href="/Contacts">Contacts</a>
        </div></div>
        <div className="rightSide"></div>
        <input type="text" placeholder="Search?" />
        <button>Search</button>
    </div>
}

export default Navbar
