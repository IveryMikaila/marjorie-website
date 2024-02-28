import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Home.css'
import Carousel from 'react-bootstrap/Carousel';
import bookCover from '../assets/book1.png';
import bookBack from '../assets/book2.png';
import bookReviews from '../assets/bookReviews.png';

const Home = () => {
  return (
    <>
      <div className='home-page'></div>
      <div className='book'>
        <a target='_blank' href='https://www.amazon.com/Quest-Find-Whom-Soul-Loves/dp/B08R4FB8NC'>
      <Carousel className='carousel-m'>
      <Carousel.Item className='carousel-item-m' interval={1000}>
        <img src={bookCover} width='300px' alt=''/>
      </Carousel.Item>
      <Carousel.Item className='carousel-item-m' interval={500}>
      <img src={bookBack} width='300px' alt=''/>
      </Carousel.Item>
    </Carousel>
    </a>

    <div className='book-reviews'>
      <img src={bookReviews} alt='' width='700px'/>
      </div> 
      </div>
    </>
  )
}

export default Home;