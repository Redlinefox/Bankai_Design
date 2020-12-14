import React from 'react';
import './Project.css';

function Project1() {
  return (
    <>
      <div className='project-info-container'>
        <h1 className='heading'>Creating Bankai Design</h1>
        <h2 className='subheading'>
          This page is a gallery of the code for the site you are looking at right now.  This website
          is under constant development to make it more interesting and visually appealling.  Future goals:
          &nbsp;Adding an image or video carousel, more animations, popout images, videos, etc.
            </h2>
        <div className='project-social-icon'>
          <div className='social-icon-wrapper'>
            <h2> HTML 5</h2>
            <img className='social-icon' src='images/html-icon.png' alt='HTML5 icon'></img>
          </div>
          <div className='social-icon-wrapper'>
            <h2> CSS 3</h2>
            <img className='social-icon' src='images/css-icon.png' alt='CSS3 icon'></img>
          </div>
          <div className='social-icon-wrapper'>
            <h2> React.js</h2>
            <img className='social-icon' src='images/reactjs-icon.png' alt='React.js icon'></img>
          </div>
          <div className='social-icon-wrapper'>
            <h2> Visual Studio</h2>
            <img className='social-icon' src='images/vscode-icon.png' alt='VS Code icon'></img>
          </div>
          {/* <h2> HTML 5</h2>
            <img className='social-icon' src='images/html-icon.png' alt='HTML5 icon'></img>
            <h2> CSS 3</h2>
            <img className='social-icon' src='images/css-icon.png' alt='CSS3 icon'></img>
            <h2> React.js</h2>
            <img className='social-icon' src='images/reactjs-icon.png' alt='React.js icon'></img>
            <h2> Visual Studio</h2>
            <img className='social-icon' src='images/vscode-icon.png' alt='VS Code icon'></img> */}
        </div>
        <div className='project-row'>
          <div>
            <img className='project-image-center' src='images/bankai-dev/bankai1.png' alt='none'></img>
          </div>
          <div className='project-text-center'>
            <p>
              The TRVL website code was used as a foundational template.  Everything else was hand coded
              out from there.
                </p>
          </div>
        </div>
        <div className='project-row'>
          <div>
            <img className='project-image-center' src='images/bankai-dev/bankai2.png' alt='none'></img>
          </div>
          <div className='project-text-center'>
            <p>
              React Router-Dom, Router and Switch code in App.js.
                </p>
          </div>
        </div>
        <div className='project-row'>
          <div>
            <img className='project-image-center' src='images/bankai-dev/bankai3.png' alt='none'></img>
          </div>
          <div className='project-text-center'>
            <p>
              Card Items function in Visual Studio Code.
                </p>
          </div>
        </div>
        <div className='project-row'>
          <div>
            <img className='project-image-center' src='images/bankai-dev/bankai4.png' alt='none'></img>
          </div>
          <div className='project-text-center'>
            <p>
              Cascading Style Sheets for the Projects pages.
                </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project1;