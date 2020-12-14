import React from 'react';
import './Project.css';
import Project3Rows from '../Project3Rows';

function Project3() {
    return (
        <>
        <div className='project-info-container'>
            <h1 className='heading'>C-Hear Case Study</h1>
            <h2 className='subheading'>In the fall of 2020 I was enrolled in SMU's Hands on Design Thinking course as part of 
            my UX Design certification. My instructor J. Schuh invited our class to do a case study 
            for the C-Hear leadership team. &nbsp;Our teams studied their C-Hear Intelligent Format (CHIF) technology and were tasked 
            with coming up with creative solutions to apply the CHIF in new innovative ways.
            </h2>
            <div className='project-social-icon'>
            <div className='social-icon-wrapper'>
                <h2>Adobe XD</h2>
                <img className='social-icon' src='images/adobexd.png' alt='AdobeXD'></img>
            </div>
            <div className='social-icon-wrapper'>
                <h2>Mural.co</h2>
                <img className='social-icon' src='images/mural-icon.png' alt='Mural icon'></img>
            </div>
            <div className='social-icon-wrapper'>
                <h2>Power Point</h2>
                <img className='social-icon' src='images/powerpoint-logo.png' alt='PowerPoint icon'></img>
            </div>
            </div>

            <Project3Rows />

            {/* <div className='project-row'>
            <img className='project-image-left' src='images/chear/Slide18.png' alt='none'></img>
            <div className='text-wrapper-right'>
                <p>This is an overview of our process when we were tasked with designing a big idea 
                for the Plano based technology company C-Hear. <br/><br/>My team and I went through a full UX 
                design framerwork covering: Empathy Maps, Stakeholder Maps, Journey Maps and 
                Feasibility Maps.
                </p>
            </div>
            </div>
            <div className='project-row'>
            <img className='project-image-right' src='images/chear/Slide3.png' alt='none'></img>
            <div className='text-wrapper-left'>
                <p>C-Hear's CHIF technology and it's capabilities gave it distinguishing features compared 
                to other media formats; primarily used as an image file with audio and text metadata 
                which has a small package size. <br/><br/>We wanted to provide something unique that could 
                leverage all of these qualities.</p>
            </div>
            </div>
            <div className='project-row'>
            <img className='project-image-left' src='images/chear/Slide5.png' alt='none'></img>
            <div className='text-wrapper-right'>
                <p>We came up with the idea of combining block-chain technology with the CHIF to produce a collectible card system for 
                the music industry; something which doesn't exist as of yet.</p>
            </div>
            </div>
            <div className='project-row'>
            <img className='project-image-right' src='images/chear/Slide6.png' alt='none'></img>
            <div className='text-wrapper-left'>
                <p>To understand who our users might be, we created an Empathy Map in Mural.co.  
                C-Hear  has catered their technology around those with disabilities so we wanted to 
                gather ideas and imagined some things they might say, think, do, and feel if we were 
                in their shoes.</p>
            </div>
            </div>
            <div className='project-row'>
            <img className='project-image-left' src='images/chear/Slide7.png' alt='none'></img>
            <div className='text-wrapper-right'>
                <p>Based on the Stakeholder Map provided we concluded that there needed to be a big 
                design idea pitched so that C-Hear could access more markets.<br/><br/>In this recreation of 
                the C-HEAR team’s internal map, the red/dotted lines represent a non-existent or weak 
                relationship, and yellow/green are normal to strong.  How could they compete against 
                other market forces in play?
                </p>
            </div>
            </div>
            <div className='project-row'>
            <img className='project-image-right' src='images/chear/Slide8.png' alt='none'></img>
            <div className='text-wrapper-left'>
                <p>
                With our Journey Map exercise we dug into the stages of a new client’s on-boarding 
                experience.  This helped us create a narrative that we could think of in terms of an 
                end user’s thoughts and emotions. <br/><br/>We imagined what users were doing and thinking 
                throughout the journey, looked for pain points and ideated on opportunities for 
                improvement.
                </p>
            </div>
            </div>
            <div className='project-row'>
            <img className='project-image-left' src='images/chear/Slide9.png' alt='none'></img>
            <div className='text-wrapper-right'>
                <p>Next we wrote Need statements by using the Journey Map and clustering user needs 
                into common themes.<br/><br/>This helped us transition from “How might we” thinking into a 
                more focused Who, What, and Why. Ultimately these Need statements would fuel 
                our creation of Big Ideas.
                </p>
            </div>
            </div>
            <div className='project-row'>
            <img className='project-image-right' src='images/chear/Slide10.png' alt='none'></img>
            <div className='text-wrapper-left'>
                <p>During our brainstorming on new ideas with the Feasibility Map, we talked about 
                different ways the CHIF could affect various pillars of industry. <br/><br/>We came up with 
                many good ideas but ran into challenges when it came time to pick one idea to 
                extrapolate on. Debates within our group happened and we had to confer with 
                C-Hear and other sources to get feedback.  We ended up merging ideas and these 
                led to the Echo-chain!
                </p>
            </div>
            </div>
            <div className='project-row'>
            <img className='project-image-left' src='images/chear/Slide11.png' alt='none'></img>
            <div className='text-wrapper-right'>
                <p>Take the collectible block-chain card idea and pitch it to record companies, labels 
                and musicians.  Collectible digital merchandise is a growing industry and there is 
                little to no representation for artists in this field.<br/><br/>Businesses have already
                started breaking into the digital collectibles field using block-chain technology. The 
                target demographic would be Gen Z and Millennials as market studies show they take 
                the most interest in this type of media.
                </p>
            </div>
            </div>
            <div className='project-row'>
            <img className='project-image-left'src='images/chear/Slide12.png' alt='none'></img>
            <img className='project-image-right'src='images/chear/Slide13.png' alt='none'></img>
            </div>
            <div className='project-row'>
            <img className='project-image-right' src='images/chear/Slide14.png' alt='none'></img>
            <div className='text-wrapper-left'>
                <p>This is a rough idea of what the cards might look like.  Using CHIF integration, 
                end-users can view the card, play it for music, and turn it over to see more details.  
                There might even be a personal message from the musician to end-user.<br/><br/>If advanced upon, 
                we would add more design details, get user feedback via A/B testing and reiterate it until 
                we received a satisfactory “Wow” from market testers.
                </p>
            </div>
            </div>
            <div className='project-row'>
            <img className='project-image-left' src='images/chear/Slide15.png' alt='none'></img>
            <div className='text-wrapper-right'>
                <p>Here are the mobile prototypes; first done on white board.<br/><br/>The one to the right is a 
                mobile mock up done in AdobeXD of what an app idea might start out as; with library 
                view, playlist options, accessibility features, market platform integration, social 
                media and others.<br/><br/>Accessibility for Screen Reading, Colorblind Mode and 1-Handed mode 
                would be focuses to build upon that stay in the spirit of the CHIF.
                </p>
            </div>
            </div>
            <div className='project-row'>
            <img className='project-image-right' src='images/chear/Slide16.png' alt='none'></img>
            <div className='text-wrapper-left'>
                <p>
                An example of what the cards might look like if shared on a social media platform.
                </p>
            </div>
            </div>
            <div className='project-row'>
            <img className='project-image-left' src='images/chear/Slide17.png' alt='none'></img>
            <div className='text-wrapper-right'>
                <p>Closing out if we were to continue on the idea we would want to continue design on the 
                prototype block-chain exchange platform and it's interactions, gather more feedback and 
                continue refinement.<br/><br/>Ultimately we believe that this would be a great opportunity for 
                the music industry to take advantage of considering how large their fan base is. 
                </p>
            </div>
            </div> */}
        </div>
        </>
    )
}

export default Project3;