import React from 'react';
import '../Parallax/css/style.css';
import paralaximg from '../Parallax/images/shoe_section.jpg';

export default function MainParallax() {
  return (
    <>
      <div className='parallax' style={{ backgroundImage: `url(${paralaximg})` }}>
      </div>
    </>
  )
}
