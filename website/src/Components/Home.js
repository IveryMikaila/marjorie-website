import React from 'react'
import '../Styles/Home.css'
import heroWeb from '../assets/brokenVesselsWeb.svg';
import heroMobile from '../assets/brokenVesselsMobile.svg';
import Slider from './Slider';

const Home = () => {
  return (
    <>
    {/* Hero Section */}
<img className='hero-web' src={heroWeb} alt='Introduction to Restoring Broken Vessels Website Web Version'/>
<img className='hero-mobile' src={heroMobile} alt='Introduction to Restoring Broken Vessels Website Mobile Version' />
{/* Amazon Store */}
<Slider />
    </>
  )
}

export default Home;