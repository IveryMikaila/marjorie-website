import React from 'react'
import '../Styles/Contact.css'

const Contact = () => {
  return (

    <div className='contact-container'>
<h1>Let your healing journey begin.</h1>
<p>If you have any questions regarding mentoring, our women's conference or to RSVP please indicate your interest in the contact form below. </p>
<div className='contact-form'>
<form action="https://formsubmit.co/marjoriemcallsiter@gmail.com" method="POST">
<input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"/>
<input type="hidden" name="_subject" value="New Contact Form Submission!" />
<label for="name">Full Name:</label>
     <input id='name' type="text" name="Full Name" required />
     <label for="email">Email:</label>
     <input id='email' type="email" name="Email" required />
     <label for="number">Phone Number:</label>
     <input id='number' type='tel' name="Phone Number" required />
     <label for="message">Message:</label>
     <textarea className='contact-textbox' id="message" name="Message" rows="20" cols="50"></textarea>
     <button type="submit">Send</button>
</form>

</div>
    </div>
  
  )
}

export default Contact;