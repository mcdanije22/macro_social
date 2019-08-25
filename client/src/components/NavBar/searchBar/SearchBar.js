import React,{Component} from 'react';
import './searchBar.scss';

class SearchBar extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <input type = 'text' id = 'searchBar'/>
        )
    }
}
export default SearchBar;