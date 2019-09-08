import React from 'react';
import './home.scss';
import FoodCard from '../foodCard/FoodCard';

const Home = () =>{
    return(
        <div id = 'home'>
        <div id = "cards">
            <FoodCard />
            <FoodCard />

        </div>
            {/* <div id = 'topImg'>
                <img src = 'https://via.placeholder.com/400x250' />
            </div>
            <div id = 'newGroup'>
                <h3>Recently added</h3>
                <p>See alle</p>
            </div> */}
        </div>
    )
}
export default Home;
