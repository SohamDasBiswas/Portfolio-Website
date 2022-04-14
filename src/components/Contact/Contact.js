import React, {useRef} from 'react';
import emailjs from 'emailjs-com';
import{toast} from 'react-toastify';
import'react-toastify/dist/ReactToastify.css'
import './Contact.css';
import contactImg from '../../img/contact.png';

  


function Contact() {
    toast.configure()
    const notify_success = () => {
        toast.success('Your Message Has Been Send Successfully😀!!', {position: toast.POSITION.TOP_CENTER})
    }
    const notify_error = () => {
        toast.error('Something Went Wrong😥, Please Try To Send Some Time Later!!', {position: toast.POSITION.TOP_CENTER})
    }

    
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_sji2g54', 'template_j3o9239', form.current, 'wiE1cs69TwRaSDUub')
          .then((result) => {
              console.log(result.text);
              notify_success()
          }, (error) => {
              console.log(error.text);
              notify_error()
          });
      };
  return (
    <div className='contact component__space' id='Contacts'>
        <div className='row'>
            <div className='col__2'>
                <div className='contact__box'>
                    <div className='contact__meta'>
                        <h1 className='contact__text'>Contact Me</h1>
                    </div>
                    <form className='input__box' ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' className='contact name' placeholder='Your Name *' required/>
                        <input type="text" name='email' className='contact email' placeholder='Your Email *' required/>
                        <input type="text" name='number' className='contact number' placeholder='Your Contact Number *' required/>
                        <input type="text" name='subject' className='contact subject' placeholder='Write a Subject *' required/>
                        <textarea name='message' id='message' placeholder='Write Your message *' required></textarea>
                        <button ref={form} onClick={sendEmail} className='btn contact pointer' type='submit'>Submit</button>
                    </form>
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