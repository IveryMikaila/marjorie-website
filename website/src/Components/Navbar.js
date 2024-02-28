import React,{useState} from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import '../Styles/Navbar.css'

const Navbar = () => {
const [open, setOpen] = useState(false);

  return (
    <div className='navigation-m'>
      <div className='hamburger-container-m'>
    <Hamburger color='#fff' toggled={open} toggle={setOpen} />
    </div>
    
<div className={open ? 'nav-active-m' : 'nav-m' }>
  <div className='nav-links-m'>
  <a className='nav-link-m' href='/'>Home</a>
<a className='nav-link-m' href='/contact'>Contact</a>
  </div>
</div>
    
    </div>
  )
}

export default Navbar;