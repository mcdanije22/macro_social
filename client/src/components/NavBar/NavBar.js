import React,{Component} from 'react';
import SearchBar from './searchBar/SearchBar';

class NavBar extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <SearchBar />
        )
    }
}

export default NavBar;