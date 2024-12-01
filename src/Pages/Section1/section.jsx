import React from 'react'
import './section.css'; // Ensure you create a CSS file for styling
const Section = () => {
  return (
    <div className='section-container'>
        <div className='text-section'>
            <h1 className='head-section'>
                Expert Digital Solution for your dream project
            </h1>
           
        </div>
        <div className='image-section'>
        <img  className='image'
          src="src\assets\homepic2.jpg" 
          alt="Sample" 
        />
        
        </div>
      
    </div>
  )
}

export default Section
