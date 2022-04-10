import React from 'react';
import './Footer.css'
import footerImg from '../../img/logo.png';
function Footer() {
  return (
    <div className='footer d__flex align__items__center justify__content__space__between pz-10'>
        <img src={footerImg} className='footer__img pointer' alt=''/>
        <span className='copyright'>Copyright © 2022 Soham Das Biswas. All Rights Reserved.</span>
    </div>
  )
}

export default Footer;