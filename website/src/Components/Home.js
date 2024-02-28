import React from 'react'
import '../Styles/Home.css'
import heroWeb from '../assets/brokenVesselsWeb.svg';
import heroMobile from '../assets/brokenVesselsMobile.svg';
import bookReviews from '../assets/bookReviews.png';
import Slider from './Slider';
import About from './About';

const Home = () => {
  return (
    <>
    {/* Hero Section */}
<img className='hero-web' src={heroWeb} alt='Introduction to Restoring Broken Vessels Website Web Version'/>
<img className='hero-mobile' src={heroMobile} alt='Introduction to Restoring Broken Vessels Website Mobile Version' />
{/* Amazon Store */}
<div className='amazon-section'>

<Slider />

<a target='_blank' className='amazon-link' href='https://www.amazon.com/Quest-Find-Whom-Soul-Loves/dp/B08R4FB8NC'>
<img className='reviews-img' src={bookReviews} alt='Amazon book reviews and description'/>
</a>
</div>
<p className='amazon-text'>Check out my books on <a className='store-link' target='_blank' href='https://www.amazon.com/stores/Marjorie-McAllister/author/B08RP8N7JG?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true'> Amazon</a>✨</p>
<About />

<div className='event-section'>
  <p>
  Join us for a day of inspiration, empowerment, and transformation at The Epiphany - “An Awakening” Women's Conference!
<br/>
<br/>
Date: Saturday, May 18
<br/>
Time: 10:00 AM - 2:00 PM
<br/>
Location:
240 Naugatuck Avenue,
Milford, CT 06460
<br/>
<br/>
<a href='/contact'>RSVP here.</a>
</p>

</div>
    </>
  )
}

export default Home;