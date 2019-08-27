import React from 'react';
import './foodCard.scss';

const FoodCard = () =>{
    return(
        <div className = 'foodCardContainer'>
                <img src = 'https://via.placeholder.com/170x120' />
                <div className = 'bottomCard'>
                    <h3>Keto Pizza</h3> 
                    <p>By: Josh McDaniel</p>
                    <p>20p 20f 50c </p>
                    <div className = 'bottomTags'>
                        <button>Keto</button>
                        <button>Protein</button>
                    </div>
                </div>
        </div>
    )
};
export default FoodCard;