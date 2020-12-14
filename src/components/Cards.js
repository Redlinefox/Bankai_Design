import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Projects</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem
              src='images/bankai-code.png'
              text='Development of Bankai Design'
              label='UI/Web Development'
              path='/bankai-design-creation'
            />
            <CardItem
              src="images/trvl/trvl-cover.png"
              text="TRVL Website Development"
              label="UI/Web Development"
              path='/trvl-website-development'
            />
          </ul>
          <ul className='cards_items'>
            <CardItem
              src='images/chear/Slide18.png'
              text='C-Hear Case Study'
              label='User Experience (UX)'
              path='/chear-case-study'
            />
            <CardItem
              src="images/unwrapped/Slide1.png"
              text="UnWrapped SMU Project"
              label="User Experience (UX)"
              path='/unwrapped-project'
            />
            {/* <CardItem 
                src="images/zohr-cover.png"
                text="Zohr CRM Design"
                label="User Experience (UX)"
                path='/zohr-crm-design'
                /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;