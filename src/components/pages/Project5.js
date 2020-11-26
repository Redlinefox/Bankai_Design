import React from 'react';
import './Project.css';
import Footer from '../Footer';

function Project5() {
  return (
    <>
      <div className='project-info-container'>
        <h1 className='heading'>Zohr CRM Design</h1>
        <div className='project-row'>
          <img className='project-image-left' src='images/chear/Slide18.png' alt='none'></img>
          <div className='project-text'>
            <p>This is an overview of our process when we were tasked with designing a big idea 
              for the Plano based technology company C-Hear.</p>
          </div>
        </div>
        <div className='project-row'>
          <img className='project-image-right' src='images/chear/Slide3.png' alt='none'></img>
          <div className='project-text'>
            <p>C-Hear's CHIF technology and it's capabilities gave it distinguishing features compared 
              to other media formats; primarily used as an image file with audio and text metadata 
              which has a small package size.  We wanted to provide something unique that could 
              leverage all of these qualities.</p>
          </div>
        </div>
        <div className='project-row'>
          <img className='project-image-left' src='images/chear/Slide5.png' alt='none'></img>
          <div className='project-text'>
            <p>Combining block-chain technology with the CHIF to produce a collectible card system for 
              the music industry; something which doesn't exist as of yet.</p>
          </div>
        </div>
        <div className='project-row'>
          <img className='project-image-right' src='images/chear/Slide6.png' alt='none'></img>
          <div className='project-text'>
            <p>Project Text goes in here</p>
          </div>
        </div>
        <div className='project-row'>
          <img className='project-image-left' src='images/chear/Slide7.png' alt='none'></img>
          <div className='project-text'>
            <p>Project Text goes in here</p>
          </div>
        </div>
        <div className='project-row'>
          <img className='project-image-right' src='images/chear/Slide8.png' alt='none'></img>
          <div className='project-text'>
            <p>Project Text goes in here</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project5;