import React from 'react'
import '../CSS/Navbar.css'
import picture from'../Pictures/bag.png'
import picture1 from '../Pictures/Vector.png'

const Navbar = () => {
  return (
    <div>
        {/* white strap above */}
        <div className="element476"></div>
        {/* Logo keyword */}
        <div className="logo">Logo</div>
        {/* logo img */}
        <img src={picture} alt="Not Found" className='logoimg' />

        {/* vector */}
        <img src={picture1} alt="" className='frame' />
        

        {/* Line */}
        <div className="line"></div>
    </div>
  )
}

export default Navbar