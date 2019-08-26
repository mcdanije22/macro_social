import React from 'react';
import './app.scss';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/home/Home';
import FooterMenu from './components/footerMenu/FooterMenu';
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
      <div id = 'main'>
        <Switch>
        
        </Switch>
      </div>
      <FooterMenu />  
    </div>
  )
}

export default App;
