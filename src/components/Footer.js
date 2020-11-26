import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo" to='/'>
              BKD
            </Link>
          </div>
          <small className='website-rights'>Bankai Design © 2020</small>
          <div className='social-icons'>
          {/* <Link className="social-icon-link linkedin"
            to="https://www.linkedin.com/in/aricakbani/"
            target="_blank"
            aria-label='LinkedIn'
          > */}
            <a className="social-icon-link linkedin" href='https://www.linkedin.com/in/aricakbani/' target='_blank' rel="noopener noreferrer">
              <i className='fab fa-linkedin'/>
            </a>
          {/* </Link> */}
          {/* <Link className="social-icon-link behance"
            to="/"
            target="_blank"
            aria-label='Behance'
          > */}
            <a className="social-icon-link behance" href='https://www.behance.net/aricakbani' target='_blank' rel="noopener noreferrer">
            <i className="fab fa-behance-square"></i>
            </a>
          {/* </Link> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer;
