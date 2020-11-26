import React from 'react';
import './About.css';

function About(){
  return (
    <>
      <div className='about'>
        <div className='about-container'>
          <div className='about-column-left'>
            <div className='row'>
              <div className='about-img-wrapper'>
                <img className='about-img' width='100%' src='images/about/profile-pic.jpg' alt='Aric profile'></img>
              </div>
              <div className='about-text-container'>
                <h2>
                  Hello and welcome to my site! My name is Aric Akbani and I am the owner 
                  and developer of Bankai Designs.
                  <br/><br/>As you can tell by this site, I am a UI/UX Developer. Anytime I am not working 
                  I am spending time researching or learning new languages.
                  <br/><br/>Travelling and photography are hobbies of mine; I usually try to get out of my comfort zone at
                  least twice a year.
                </h2>
              </div>
            </div>
            <div className='row'>
              <div className='about-img-wrapper'>
                <img className='about-img' width='100%' src='images/about/Traveling.jpg' alt='Aric profile'></img>
              </div>
              <div className='about-text-container'>
                <h2>
                    Originally from St. Louis, MO, I moved south to Dallas, TX in 2017 to enjoy warmer weather.
                </h2>
                <h2>
                  <br/>Over the last 10 years I have worked in various areas of the Business and 
                  Information Technology space.  Currently I put those skills to use to solve
                  Front-end, User Interface and User Experience problems for my associates and clients.
                </h2>
              </div>
            </div>
            <div className='row'>
              <div className='about-img-wrapper'>
                <img className='about-img' width='100%' src='images/about/forest-trip.jpg' alt='Aric profile'></img>
              </div>
              <div className='about-text-container'>
                <h2>
                  I'm always looking out for new work and new challenges. If you need some help with development or research 
                  on an application hit the Contact button in the upper right and reach out to me.
                </h2>
                <h2>
                  <br/>I will deliver you results!
                </h2>
                <div className='about-resume-link-wrapper'>
                  <a className='about-resume-link' href="/docs/aric-resume.docx" download>
                    <i class="far fa-file-alt"></i>
                  </a>
                  <a className='about-resume-link-text' href="/docs/aric-resume.docx" download>Resume</a>
                </div>
              </div>
            </div>
          </div>
          <div className='about-column-right'>
            <h1>Skills</h1>
            <div className='sidebar-content'>
              <h2>Web Development</h2>
              <ul className='list-items'>
                <li className='list-item'>
                  <img className='list-img' src='images/html-icon.png' alt='HTML5 icon'></img>
                  <h3>HTML 5</h3>
                </li>
                <li className='list-item'>
                  <img className='list-img' src='images/css-icon.png' alt='CSS3 icon'></img>
                  <h3>CSS 3</h3>
                </li>
                <li className='list-item'>
                  <img className='list-img' src='images/reactjs-icon.png' alt='ReactJS icon'></img>
                  <h3>React.js</h3>
                </li>
                <li className='list-item'>
                  <img className='list-img' src='images/vscode-icon.png' alt='VS Code icon'></img>
                  <h3>VS Code</h3>
                </li>
              </ul>
            </div>
            <div className='sidebar-content'>
              <h2>UX Toolkit</h2>
              <ul className='list-items'>
                <li className='list-item'>
                  <img className='list-img' src='images/adobexd.png' alt='AdobeXD'></img>
                  <h3>Adobe XD</h3>
                </li>
                <li className='list-item'>
                  <img className='list-img' src='images/axure9-icon.png' alt='Axure 9 icon'></img>
                  <h3>Axure 9</h3>
                </li>
                <li className='list-item'>
                  <img className='list-img' src='images/balsamiq-icon.png' alt='Balsamiq icon'></img>
                  <h3>Balsamiq</h3>
                </li>
              </ul>
            </div>
            <div className='sidebar-content'>
              <h2>Collaboration</h2>
              <ul className='list-items'>
                <li className='list-item'>
                  <img className='list-img' src='images/slack-icon.png' alt='Slack icon'></img>
                  <h3>Slack</h3>
                </li>
                <li className='list-item'>
                  <img className='list-img' src='images/asana-logo.png' alt='Asana icon'></img>
                  <h3>Asana</h3>
                </li>
                <li className='list-item'>
                  <img className='list-img' src='images/trello-icon.png' alt='Trello icon'></img>
                  <h3>Trello</h3>
                </li>
                <li className='list-item'>
                  <img className='list-img' src='images/jira-logo.png' alt='Jira icon'></img>
                  <h3>Jira</h3>
                </li>
                <li className='list-item'>
                  <img className='list-img' src='images/front-logo.png' alt='Front icon'></img>
                  <h3>Front</h3>
                </li>
                <li className='list-item'>
                  <img className='list-img' src='images/invision-icon.png' alt='Invision icon'></img>
                  <h3>InVision</h3>
                </li>
                <li className='list-item'>
                  <img className='list-img' src='images/mural-icon.png' alt='Mural icon'></img>
                  <h3>Mural</h3>
                </li>
              </ul>
            </div>
            <div className='sidebar-content'>
              <h2>Flowcharting</h2>
              <ul className='list-items'>
                <li className='list-item'>
                  <img className='list-img' src='images/drawio-icon.png' alt='Draw.io icon'></img>
                  <h3>Draw.io</h3>
                </li>
                <li className='list-item'>
                  <img className='list-img' src='images/visio-icon.png' alt='Visio icon'></img>
                  <h3>Visio</h3>
                </li>
                <li className='list-item'>
                  <img className='list-img' src='images/lucid-icon.png' alt='Lucid icon'></img>
                  <h3>Lucid</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;