import './Navbar.css'
// import {BrowserRouter as Link } from 'react-router-dom'


function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="nav-space">
                    <p className="nav-brand-text">Meating Steak House</p>
                    <ul className="nav-ul">
                        <li className="nav-text-space-between">Reservation</li>
                        <li className="nav-text-space-between"><p>Contact</p></li>
                    </ul>
                </div>
            </div>
        </>
    );
  }
  
  export default Navbar;
  