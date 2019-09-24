import React from 'react';
import './footerMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faHome } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const FooterMenu = () =>{
    return(
        <div id = 'footerMenu'>
            <ul id = 'buttonGroup'>
                <Link to={'/'} ><button type='button' className='footerMenuButtons' ><FontAwesomeIcon icon={faHome} /></button></Link>     
                <Link to={'/'} ><button type='button' className='footerMenuButtons' ><FontAwesomeIcon icon={faHeart} /></button></Link>       
                <Link to={'/addpost'} ><button type='button' className='footerMenuButtons' ><FontAwesomeIcon icon={faPlus} /></button></Link>       
                <Link to={'/'} ><button type='button' className='footerMenuButtons' ><FontAwesomeIcon icon={faBell} /></button></Link>       
                <Link to={'/'} ><button type='button' className='footerMenuButtons' ><FontAwesomeIcon icon={faUser} /></button></Link>       
            </ul>
        </div>
    )
};
export default FooterMenu;