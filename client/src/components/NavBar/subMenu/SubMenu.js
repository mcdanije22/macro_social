import React from 'react';
import './subMenu.scss';

const SubMenu = () =>{
    return(
        <ul id = 'subMenu'>
            <li>Top </li>
            <li>New</li>
            <li>Protein</li>
            <li>Carbs</li>
            <li>Fats</li>
            <li>Keto</li>
            <li>Paleo</li>
            {/* <li>Less than 500 calories</li>
            <li>less than 1000 calories </li>
            <li>1500+ calories</li> */}
        </ul>
    )
}
export default SubMenu;