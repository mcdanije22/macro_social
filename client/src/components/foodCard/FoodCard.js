import React from 'react';
import './foodCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPaperPlane, faComment } from '@fortawesome/free-regular-svg-icons';


const FoodCard = () =>{
    return(
        <div className='foodCard'>
            <div className='cardTopRow'>
                <img src='https://via.placeholder.com/50' alt='user'/>
                <h3>Keto Pizza</h3>
            </div>
            <hr />
            <div className='cardImage'>
                <img src='https://via.placeholder.com/300x200' alt='food'/>
            </div>
            {/* <hr /> */}
            <div className='bottomCard'>
                <div className='bottomCardRowone'>
                    <h1>20P 2C 9F</h1> 
                    <p>200 Saves</p>
                </div>
                <div className='bottomCardRowtwo'>
               <button type='button'><FontAwesomeIcon className='saveIcon'  icon={faHeart} /></button>     
               <button type='button'><FontAwesomeIcon className='saveIcon'  icon={faPaperPlane} /></button> 
               <button type='button'><FontAwesomeIcon className='saveIcon'  icon={faComment} /></button>  
                  
                </div>
            </div> 
            <div className='bottomCardFooter'>
                    <button>Keto</button>
                    <button>Protien</button>
                </div>
        </div>
    )
}
export default FoodCard;