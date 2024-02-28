import React,{useState, useEffect} from 'react'
import bookCover from '../assets/book1.png';
import bookBlurb from '../assets/book2.png';

const Slider = () => {
const [src, SetSrc] = useState('');

function animateSlider (){
SetSrc(bookCover)
const prev = document.getElementById('left-dot');
const next = document.getElementById('right-dot');
prev.style.color = 'rgba(0, 0, 0, 1)'
next.style.color = 'rgba(0, 0, 0, 1)'

prev.addEventListener('click', ()=>{
    SetSrc(bookCover)
    prev.style.color ='rgba(0, 0, 0, 0.7)'
    next.style.color = 'rgba(0, 0, 0, 1)';
})
next.addEventListener('click', ()=>{
    SetSrc(bookBlurb);
    next.style.color = 'rgba(0, 0, 0, 0.7)'
    prev.style.color ='rgba(0, 0, 0, 1)'
})


}
useEffect(()=>{
    animateSlider();
})
  return (
 <>
 <div className='slider-container'>
    <img src={src} alt='Marjorie Mcallsiter first book blurb and cover'/>
    <div className='slider-dots'>
        <span className='slider-dot' id='left-dot'>⬤</span>
        <span className='slider-dot' id='right-dot'>⬤</span>
    </div>
 </div>
 </>
  )
}

export default Slider;