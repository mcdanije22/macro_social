import React,{Component} from 'react';
import './homeFeed.scss';
import FoodCard from '../foodCard/FoodCard';
import axios from 'axios';

class HomeFeed extends Component{
    constructor(){
        super();
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        axios.get(`/posts`)
        .then(res=>{
            this.setState({posts: res.data},()=>{
                console.log(this.state.posts)
            })
        })
    }
    render(){
        return(
            <div id = 'homeFeed'>
                <div id = "cards">
                    <FoodCard />
                    <FoodCard />
                </div>
            </div>
        )
    }
}
export default HomeFeed;
