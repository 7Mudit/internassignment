import React from 'react'
import '../CSS/Footer.css'
import picture from '../Pictures/bag.png'
import picture1 from '../Pictures/Twitter.png'
import picture2 from '../Pictures/Linked.png'
import picture3 from '../Pictures/Facebook.png'
import picture4 from '../Pictures/Group.png'


const Footer = () => {
  return (
    <div>

        <div className="linelast"></div>
        <div className="linefirst"></div>
        <div className="rectangle502">
            <h2 className="logoFooter">Logo</h2>
            <h4 className="lorem32">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro fuga quisquam ratione maxime impedit iusto magnam ducimus? Neque, sunt?!</h4>
            <img src={picture} alt="NotFound" className='footerPhoto' />
            <img src={picture1} alt="NotFound" className='Twitter' />
            <img src={picture2} alt="NotFound" className='Linked' />
            <img src={picture3} alt="NotFound" className='Facebook' />
            <img src={picture4} alt="NotFound" className='Google' />
            <h4 className="copyright">©2022 lyfestring.com</h4>
        </div>
    </div>
  )
}

export default Footer