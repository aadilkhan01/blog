import React from 'react'
import Navbar from './Navbar';
import Banner from './Banner';
import Course from './Course';
import Footer1 from './Footer1';
import Footer2 from './Footer2';

function App() {
  return (
    <div className='App'>
      
        <div className='navbar'> <Navbar /> </div>
        <div className=' banner'><Banner /></div>
        <div className='course'> <Course/> </div>
        <div className='footer'> <Footer1 /> </div>
        <div className='footer'> <Footer2 /> </div>
  
      
    </div>
  )
}

export default App