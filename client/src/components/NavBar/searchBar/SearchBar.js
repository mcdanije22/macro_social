import React,{Component} from 'react';
import './searchBar.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <input type = 'text' id = 'searchBar' placeholder='search' />
        )
    }
}
export default SearchBar;