import React from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Microsoft from '../../assets/microsoft.png';
import Adobe from '../../assets/adobe.png';
import TwitterIcon from '../../assets/twitter.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import YouTubeIcon from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_0p78opa', 'template_9kt7amb', form.current, '_MRj_ubstqWjJachg')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert(`Failed to send email: ${error.text || error}`);
      });
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Experience</h1>
        <p className="clientDesc">I have had the privilege of working with Luminar Technolab, Adobe, and DEPT® Global, gaining valuable industry experience and exposure to diverse projects. These opportunities have strengthened my technical expertise, enhanced my problem-solving abilities, and helped me grow professionally through continuous learning, collaboration, and hands-on experience.</p>
        <div className="clientImgs">
            <img className="clientImg" src={Walmart} alt="Client 1" />
            <img className="clientImg" src={Microsoft} alt="Client 2" />
            <img className="clientImg" src={Adobe} alt="Client 3" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
        <form className="contactForm" onSubmit={sendEmail} ref={form}>
            <input className="name" type="text" name="your_name" placeholder="Your Name" required />
            <input className="email" type="email" name="your_email" placeholder="Your Email" required />
            <textarea className="msg" name="message" placeholder="Your Message" required></textarea>
            <button type="submit" value="Send" className="submitBtn">Submit</button>
            <div className="links">
                <a href="https://www.linkedin.com/in/athul-ganesh" target="_blank" rel="noopener noreferrer"><img src={TwitterIcon} alt="LinkedIn" className='link' /></a>
                <a href="https://www.gmail.com/" target="_blank" rel="noopener noreferrer"><img src={FacebookIcon} alt="Facebook" className='link' /></a>
                <a href="https://www.instagram.com/athul_ganesh__?srtk=MWgxeW8wY2dzejh4cQ==" target="_blank" rel="noopener noreferrer"><img src={InstagramIcon} alt="Instagram" className='link' /></a>
                <a href="https://github.com/Athul1142003" target="_blank" rel="noopener noreferrer"><img src={YouTubeIcon} alt="GitHub" className='link' /></a>
            </div>
        </form>
      </div>
    </section>
  )
}

export default Contact;