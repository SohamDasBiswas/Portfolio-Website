import React from 'react';
import './Contact.css';
import contactImg from '../../img/contact.png';
function Contact() {
  return (
    <div className='contact component__space' id='Contacts'>
        <div className='row'>
            <div className='col__2'>
                <div className='contact__box'>
                    <div className='contact__meta'>
                        <h1 className='contact__text'>Contact Me</h1>
                    </div>
                    <div className='input__box'>
                        <input type="text" className='contact name' placeholder='Your Name *'/>
                        <input type="text" className='contact email' placeholder='Your Email *'/>
                        <input type="text" className='contact number' placeholder='Your Contact Number *'/>
                        <input type="text" className='contact subject' placeholder='Write a Subject *'/>
                        <textarea name='message' id='message' placeholder='Write Your message'></textarea>
                        <button className='btn contact pointer' type='submit'>Submit</button>
                    </div>
                </div>
            </div>
            <div className='col__2'>
                <img src={contactImg} alt='' className='contact__img'/>
            </div>
        </div>
    </div>
  )
}

export default Contact;