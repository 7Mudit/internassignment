import React from 'react'
import '../CSS/body.css'
import picture from '../Pictures/Mask.png'
const Body = () => {
  return (
    <div>
        {/* masking blue color whole page */}
        <div className="rectangle499">
        </div>

        {/* mask picture */}
        <img src={picture} alt="Not Found"  className='mask'/>
    </div>
  )
}

export default Body