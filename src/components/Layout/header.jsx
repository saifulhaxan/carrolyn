import React , {useState} from 'react'
import { Link } from "react-router-dom";
import hamburger from "/images/hamburger.png"
import logo from "/images/logo.png"

export const Header = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <div className='Navbar'>
        < div className='navbar_left'>
          <Link to="/"> <button className='logo_text'>
            <img src={logo}/>
             </button>
            </Link>
        </div>
        <div className='navbar_toggle'>
      <button onClick={()=>{
        setIsNavExpanded(!isNavExpanded)
      }}>
   
        <img src={hamburger}/> </button>
        {
          isNavExpanded?<div className='navbar_after_toggle' onClick={()=>{setIsNavExpanded(false)}}>
            <div className='navbar_after_toggle_sticky'>
            <Link to="/"><h6 onClick={()=>{setIsNavExpanded(false)}}>Home</h6></Link>
           <Link to="/about-us"><h6 onClick={()=>{setIsNavExpanded(false)}}>About Me</h6></Link>
           <Link to="/buynow"><h6 onClick={()=>{setIsNavExpanded(false)}}>Buy Now</h6></Link>
           <Link to="/gallery"><h6 onClick={()=>{setIsNavExpanded(false)}}>Gallery</h6></Link>
           <Link to="/reviews"><h6 onClick={()=>{setIsNavExpanded(false)}}>Reviews</h6></Link>
          </div>
          </div>:""
        }
            </div>
        <div className='navbar_mid'>
           <Link to="/"><p>Home</p></Link>
           <Link to="/about-us"><p>About Me</p></Link>
           <Link to="/buynow"><p>Buy Now</p></Link>
           <Link to="/gallery"><p>Gallery</p></Link>
           <Link to="/reviews"><p>Reviews</p></Link>
        </div>
        < div className='navbar_right'>
        <Link to="/contact-us"> <button className='btn'>Contact Us</button></Link>
        </div>

    </div>
  )
}
