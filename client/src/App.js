import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';

// class App extends Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//   return (
//     <div className="App">
//     <Switch>

//     </Switch>
//     </div>
//   );
//   }
// }

const App = () =>{
  return(
    <div className = 'App'>
      <NavBar />
      <Switch>
      
      </Switch>
    </div>
  )
}

export default App;
