import React from "react";
import './navbar.css'

function Navbar(){
    return(
        <div>
            <div className="navbar">
                <img src="https://wp.pentad.webc.in/wp-content/uploads/2023/02/main_logo.png"/>
                <nav>
                    <ul className="navbar1">
                        <li className="navbar2"><a href="#">About</a></li>
                        <li className="navbar2"><a href="#">Products</a></li>
                        <li className="navbar2"><a href="#">Platforms</a></li>
                        <li className="navbar2"><a href="#">Attention investors</a></li>
                        <li className="navbar2"><a href="#">Contact us</a></li>
                        <li className="navbar2"><a href="#">Open an Account</a></li>
                        <li className="navbar2"><button className="Buttonpentad">Login</button></li>
                        
                    </ul>
                </nav>
                <svg xmlns="http://www.w3.org/2000/svg" className="threebarmenu" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </div>
        </div>

    )
}export default Navbar