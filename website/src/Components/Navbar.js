import React,{useState} from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import '../Styles/Navbar.css'

const Navbar = () => {
const [open, setOpen] = useState(false);

  return (
    <div className='nav-bar'>
<div className='navigation'>
<h1>Restoring Broken Vessels </h1>

<div className='group'>
 

    <a  href='/contact'>
      Contact Us
    </a>
 

    <div className='hamburger-container'>
    <Hamburger color='#E23225' toggled={open} toggle={setOpen} />
    </div>
    </div>
    </div>

    <div className={open ? 'nav-active' : 'nav' }>
  <div className='nav-links'>
  <a className='nav-link' href='/'>Home</a>
  <a className='nav-link' href='/about-us'>About</a>
<a className='nav-link' href='/contact'>Contact</a>
  </div>
</div>
    </div>
  )
}

export default Navbar;