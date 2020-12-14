import React from 'react';
import './Project.css';

function Project2() {
    return (
        <>
        <div className='project-info-container'>
            <h1 className='heading'>TRVL Website Development</h1>
            <h2 className='subheading'>
            The TRVL Website is a personal project to expand upon my Frontend Development skill set.
            &nbsp;It was built using HTML, CSS and React.js.
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
            </div>
            <div className='project-row'>
            <div>
                <img className='project-image-center' src='images/trvl/trvl-cover.png' alt='none'></img>
            </div>
            <div className='project-text-center'>
                <p>
                The website was designed with the Navbar first and made to be mobile responsive.
                </p>
            </div>
            </div>
            <div className='project-row'>
            <div>
                <img className='project-image-center' src='images/trvl/trvl-destinations.png' alt='none'></img>
            </div>
            <div className='project-text-center'>
                <p>
                The website uses the react-router and react-dom to switch between pages. <br/>
                Card components were used to make the travel displays; adjusted CSS to make the wrapper 
                mobile responsive.
                </p>
            </div>
            </div>
            <div className='project-row'>
            <div>
                <img className='project-image-center' src='images/trvl/trvl-code.png' alt='none'></img>
            </div>
            <div className='project-text-center'>
                <p>
                Screenshot of the code in the App.js file.
                </p>
            </div>
            </div>
            <div className='project-row'>
            <div>
                <img className='project-image-center' src='images/trvl/trvl-footer.png' alt='none'></img>
            </div>
            <div className='project-text-center'>
                <p>
                Screenshot of the Footer.
                </p>
            </div>
            </div>
        </div>
        </>
    )
}

export default Project2;