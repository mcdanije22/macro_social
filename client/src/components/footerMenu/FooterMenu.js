import React from 'react';
import './footerMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faHome } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faBell, faUser } from '@fortawesome/free-regular-svg-icons';

const FooterMenu = () =>{
    return(
        <div id = 'footerMenu'>
            <ul id = 'buttonGroup'>
                <button type='button' className='footerMenuButtons' ><FontAwesomeIcon icon={faHome} /></button>     
                <button type='button' className='footerMenuButtons' ><FontAwesomeIcon icon={faHeart} /></button>     
                <button type='button' className='footerMenuButtons' ><FontAwesomeIcon icon={faPlus} /></button>     
                <button type='button' className='footerMenuButtons' ><FontAwesomeIcon icon={faBell} /></button>     
                <button type='button' className='footerMenuButtons' ><FontAwesomeIcon icon={faUser} /></button>     
            </ul>
        </div>
    )
};
export default FooterMenu;