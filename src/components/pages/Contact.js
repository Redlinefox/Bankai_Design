import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
      <div className='contact'>
        <div className='contact-container'>
          <div className='column-right'>
            <h1>Contact Info</h1>
            <h2>Aric Akbani</h2>
            <h2>469-810-4566</h2>
            <h2>aricakbani@gmail.com</h2>
            <div className='social-links-wrapper'>
              <div className='contact-link-wrapper'>
                <Link className="social-icon-link" to="/" target="_blank" aria-label='LinkedIn'>
                  <a href='https://www.linkedin.com/in/aricakbani/' target='_blank' rel="noopener noreferrer">
                    <i className='fab fa-linkedin'/>
                  </a>
                </Link>
                <a href='https://www.linkedin.com/in/aricakbani/' target='_blank' rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
              <div className='contact-link-wrapper'>
                <Link className="social-icon-link" to="/" target="_blank" aria-label='Behance'>
                  <a href='https://www.behance.net/aricakbani' target='_blank' rel="noopener noreferrer">
                    <i class="fab fa-behance-square"></i>
                  </a>
                </Link>
                <a href='https://www.behance.net/aricakbani' target='_blank' rel="noopener noreferrer">Behance</a>
              </div>
              <div className='contact-link-wrapper'>
                <a className='social-icon-link' href="/docs/aric-resume.docx" download>
                  <i class="far fa-file-alt"></i>
                </a>
                <a href="/docs/aric-resume.docx" download>Resume</a>
              </div>
            </div>
          </div>
          <div className='contact-column-left'>
            <h1>Contact Form</h1>
            <h2>PHP messager form under construction.</h2>
            <img className='construction' src='images/about/construction.png' alt='under construction'></img>
            <h2>Please email me directly.</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;