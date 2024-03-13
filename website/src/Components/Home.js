import React from 'react'
import '../Styles/Home.css'

// Assets
import homeImg from '../assets/1.jpg'
import portrait from '../assets/portrait.jpg'


const Home = () => {
  return (
    <div className='home-container'>
      <header>
      <h1>Bringing about Change in the Lives
        <br/>
        of both Men and Women </h1>
<p>Marjorie McAllister is a motivational-inspirational speaker/Consultant located in Bridgeport, CT.</p>
<img src={homeImg} alt='Women holding hands' />
      </header>

<section className='about-section'>
  <img  src={portrait} alt='Picture of Marjorie'/>
  <div>
    <h2>Get to Know Me</h2>
    <h1>Motivational, Inspirational <br/> Speaker and Consultant</h1>
    <p>Born with an innate passion for personal development and empowerment, Marjorie embarked on her journey as a speaker and consultant after experiencing her own transformative moments in life. Armed with a keen understanding of human behavior, psychology, and leadership principles, she set out to share her insights and empower others to unlock their inner greatness.</p>
    <a href='/about-us'>Learn More</a>
  </div>
</section>

<section className='box-section'>
<div className='box-left'>
  <h2>More Resources</h2>
  <h1>Award-winning <br/> Community Advocate</h1>
  <p>In addition to her consultancy work, Marjorie is a prolific author, penning insightful books and articles on personal growth, leadership, and resilience. Her written works serve as guiding lights for individuals seeking to embark on their own journeys of self-discovery and empowerment. In 2005, she was awarded by both the Work Place Inc. and ABCD for her service as a community advocate.</p>
  <a target='_blank' href='https://www.amazon.com/Quest-Find-Whom-Soul-Loves/dp/B08R4FB8NC'>Purchase</a>
</div>

<div className='box-right'>

<div className='box'>
  <div className='box-item'>
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.214 1.072C4.813.752 6.916.71 8.354 2.146A.5.5 0 018.5 2.5v11a.5.5 0 01-.854.354c-.843-.844-2.115-1.059-3.47-.92-1.344.14-2.66.617-3.452 1.013A.5.5 0 010 13.5v-11a.5.5 0 01.276-.447L.5 2.5l-.224-.447.002-.001.004-.002.013-.006a5.017 5.017 0 01.22-.103 12.958 12.958 0 012.7-.869zM1 2.82v9.908c.846-.343 1.944-.672 3.074-.788 1.143-.118 2.387-.023 3.426.56V2.718c-1.063-.929-2.631-.956-4.09-.664A11.958 11.958 0 001 2.82z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M12.786 1.072C11.188.752 9.084.71 7.646 2.146A.5.5 0 007.5 2.5v11a.5.5 0 00.854.354c.843-.844 2.115-1.059 3.47-.92 1.344.14 2.66.617 3.452 1.013A.5.5 0 0016 13.5v-11a.5.5 0 00-.276-.447L15.5 2.5l.224-.447-.002-.001-.004-.002-.013-.006-.047-.023a12.582 12.582 0 00-.799-.34 12.96 12.96 0 00-2.073-.609zM15 2.82v9.908c-.846-.343-1.944-.672-3.074-.788-1.143-.118-2.387-.023-3.426.56V2.718c1.063-.929 2.631-.956 4.09-.664A11.956 11.956 0 0115 2.82z" clip-rule="evenodd"></path></svg>
  <h2>Author</h2>
  <p>An author of 2 books. Her first book, "On a Quest to Find Him Whom My Soul Loves" was published on December 22, 2020, and is available for purchase via Amazon. Click the link below. </p>
  <a href='https://www.amazon.com/Quest-Find-Whom-Soul-Loves/dp/B08R4FB8NC'>Learn More</a>
  </div>
  <div className='box-item'>
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path></svg>
  <h2>Consultant</h2>
  <p>
  Offers advice and expertise to client organizations to help them improve their business performance. </p>
  <a href='/about-us'>Learn More</a>
  </div>
</div>

<div  className='box'>
  <div className='box-item'>
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clip-rule="evenodd"></path></svg>
  <h2>Speaker</h2>
  <p>Marjorie's impact transcends boundaries, leaving an indelible mark on the hearts and minds of those who hear her healing words. </p>
  <a href='/about-us'>Learn More</a>
  </div>
  <div className='box-item'>
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6,22h15v-2H6.012C5.55,19.988,5,19.805,5,19s0.55-0.988,1.012-1H19h1h1v-1v-2V4c0-1.103-0.897-2-2-2H6 C4.794,2,3,2.799,3,5v3v6v3v2C3,21.201,4.794,22,6,22z M5,8V5c0-0.805,0.55-0.988,1-1h13v11v1H5v-2V8z"></path><path d="M11 14L13 14 13 10 15 10 15 8 13 8 13 6 11 6 11 8 9 8 9 10 11 10z"></path></svg>
  <h2>Minister</h2>
  <p>Her ministry is centered around educating, motivating, and empowering women who have been involved in abusive relationships, to assume hope and healing, by the application of Biblical principles.</p>
  <a href='/about-us'>Learn More</a>
  </div>
</div>
</div>
</section>

<section className='book-section'>
  <h3>Experience Healing</h3>
  <h1>Featured Book</h1>
  <p>First of several books focusing on each decade of my life. This book is the first decade. It reflects my journey of searching to find love in all the wrong places, and coming to terms that self-fulfilled love can only be assumed when we come to know God's unconditional love.</p>
<div className='book-img'></div>
  <a target='_blank' href='https://www.amazon.com/stores/Marjorie-McAllister/author/B08RP8N7JG?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true'>All Books</a>
</section>

<section className='final-section'>
  <p>Let's Talk</p>
  <h1>Your Healing Journey<br/> Begins Here</h1>
  <p>Fill out my contact form to get started. </p>
  <a href='/contact'>Contact Us</a>
</section>
    </div>
  
  )
}

export default Home;