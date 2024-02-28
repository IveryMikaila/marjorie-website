import React from 'react'
import '../Styles/Home.css'
import heroWeb from '../assets/brokenVesselsWeb.svg';
import heroMobile from '../assets/brokenVesselsMobile.svg';

const Home = () => {
  return (
    <>
<img className='hero-web' src={heroWeb} alt='Introduction to Restoring Broken Vessels Website Web Version'/>
<img className='hero-mobile' src={heroMobile} alt='Introduction to Restoring Broken Vessels Website Mobile Version' />
    </>
  )
}

export default Home;