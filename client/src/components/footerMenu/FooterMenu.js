import React from 'react';
import './footerMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faHome } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faBell, faUser } from '@fortawesome/free-regular-svg-icons';

const FooterMenu = () =>{
    return(
        <div id = 'footerMenu'>
            <ul id = 'buttonGroup'>
                <button type='button'><FontAwesomeIcon className='footerMenuButtons' icon={faHome} /></button>     
                <button type='button'><FontAwesomeIcon className='footerMenuButtons' icon={faHeart} /></button>     
                <button type='button'><FontAwesomeIcon className='footerMenuButtons' icon={faPlus} /></button>     
                <button type='button'><FontAwesomeIcon className='footerMenuButtons' icon={faBell} /></button>     
                <button type='button'><FontAwesomeIcon className='footerMenuButtons' icon={faUser} /></button>     
            </ul>
        </div>
    )
};
export default FooterMenu;