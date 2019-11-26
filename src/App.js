import React,{Component} from 'react';

// import './App.css';

import Contact from './Components/Contact/index'

import index from './Components/index'
import Navbar from './Components/Navbar/index'
import {BrowserRouter,Route} from 'react-router-dom'
class App extends Component {
  render(){
    return (
      <div className="App">
       <BrowserRouter>
        <Navbar/>
        <Route exact path='/' component = {index}/>
        <Route path = '/contact' component = {Contact}/>
       </BrowserRouter>
        
      </div>
    );
  }
  
}
export default App;
