import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import './addPost.scss';
import axios from 'axios';
import { Button } from 'reactstrap';

class AddPost extends Component{
    constructor(){
        super();
    }
    getItem=()=>{
        // axios.get("https://trackapi.nutritionix.com/v2/search/item?nix_item_id=513fc9e73fe3ffd40300109f",{
        //     headers:{
        //         'Content-Type':'application/json',
        //         'x-app-id':'caf20f7b', 
        //         'x-app-key':'561bdd01abc111bb2a285cc7355381be'    
        //     }
        // })
        // axios.post("https://trackapi.nutritionix.com/v2/natural/nutrients",{
        //     headers:{
        //         'Content-Type':'application/json',
        //         'x-app-id':'caf20f7b', 
        //         'x-app-key':'561bdd01abc111bb2a285cc7355381be',
        //         'x-remote-user-id':'0'
        //     },
        //     body:{
        //         "query":'egg'
        //        }
        // })
        axios.get('https://nutritionix-api.p.rapidapi.com/v1_1/search/cheddar%20cheese?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat,nf_protein,nf_total_carbohydrate',{
            headers:{
                'Content-Type':'application/json',
                "x-rapidapi-host": "nutritionix-api.p.rapidapi.com",
		        "x-rapidapi-key": "CSYGIdBclQmshGFjNBtBuL8p6H8dp1zBhiTjsnwEBD15jcGHbX" 
            }
        })
        .then(res=>{
            console.log(res)
        })
    }
    render(){
        return(
            <div>
                <h3><FontAwesomeIcon icon={faChevronLeft} /> back</h3>
                <h2>Post new food</h2>
                <div id='addForm'>
                    <h5>Title</h5>
                    <input placeholder='name' className='addInput'/>
                    <button>Upload Photo</button>
                    <h5>Ingredients</h5>
                    <Button className='plusButton' color='primary'>+</Button>
                    <button type='button' onClick={this.getItem}>test</button>
                </div>
            </div>
        )
    }
}

export default AddPost;