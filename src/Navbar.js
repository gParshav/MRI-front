import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
    <div className='maal1'>
    <div className="home-logo-grp">
      <img
        src="/playground_assets/image360f3237066646xfxxctzds9oooxmdmsgc1fsomgmgaec9110-j4bj-300h.png"
        alt="IMAGE360F3237066646xfXXctzdS9oOOxMdMsGc1FsomGmGaEC9110"
        className="home-i-m-a-g-e360f3237066646xf-x-xctzd-s9o-o-ox-md-ms-gc1fsom-gm-ga-e-c" />
      <span className="home-text">
        <span className="home-text01">MRI</span>
        <span>fix</span>
      </span>
    </div>
    </div>
    <div className='maal2'>
          <NavLink to='/'>
            <div className='home'>Home</div>
          </NavLink>
          <NavLink to='/upload'>
            <div className='upload'>Upload</div>
          </NavLink>
    </div>
          
        
      </div>
    
  )
}

export default Navbar