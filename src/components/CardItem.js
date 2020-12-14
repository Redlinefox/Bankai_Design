import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <>
        <li className='cards_item'>
            <Link className='cards_item_link' to={props.path}>
            <figure className='cards_item_pic-wrap' data-category={props.label}>
                <img 
                className='cards_item_img' 
                alt='Project' 
                src={props.src} 
                />
            </figure>
            <div className='cards_item_info'>
                <h4 className='cards_item_text'>{props.text}</h4>
            </div>
            </Link>
        </li>
        </>
    );
}

export default CardItem;