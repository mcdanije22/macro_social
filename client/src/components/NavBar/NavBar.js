import React,{Component} from 'react';
import SearchBar from './searchBar/SearchBar';
import SubMenu from './subMenu/SubMenu';
import './navBar.scss';

class NavBar extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id = 'menu'>
                <SearchBar />
                <SubMenu />
            </div>
        )
    }
}

export default NavBar;