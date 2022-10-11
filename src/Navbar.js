import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
    <div className='navbar_logo'>
        <a href='/' className='navbar_logo_pic'>
            <img className='logo' src='https://www.courselounge.com/wp-content/uploads/skillshare-platform.png' alt='' />
        </a>

        <ul>
            <li> 
                <a href='home' className='home'>Home</a>  
            </li>
            <li> 
                <a href='about' className='about'>About</a>  
            </li>
            <li> 
                <a href='contact' className='contact'>contact</a>  
            </li>
            <li> 
                <a href='course' className='design'>course</a>  
            </li>
            <li> 
                <a href='login' className='courselist'>login</a>  
            </li>





            
        </ul>

    </div>
    </div>
  )
}

export default Navbar