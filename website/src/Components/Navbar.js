import React,{useState} from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import '../Styles/Navbar.css'

const Navbar = () => {
const [open, setOpen] = useState(false);

  return (
    <div className='navigation'>
      <div className='hamburger-container'>
    <Hamburger color='#fff' toggled={open} toggle={setOpen} />
    </div>
    
<div className={open ? 'nav-active' : 'nav' }>
  <div className='nav-links'>
  <a className='nav-link' href='/'>Home</a>
<a className='nav-link' href='/contact'>Contact</a>
  </div>
</div>
    
    </div>
  )
}

export default Navbar;