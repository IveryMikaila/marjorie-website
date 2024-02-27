import React,{useState} from 'react'
import { Squash as Hamburger } from 'hamburger-react'

const Navbar = () => {
const [open, setOpen] = useState(false);

  return (
    <>
    <Hamburger toggled={open} toggle={setOpen} />
<div className={open ? 'nav-active' : 'nav' }>
Test
</div>
    
    </>
  )
}

export default Navbar;