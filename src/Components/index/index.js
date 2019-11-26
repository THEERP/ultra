import React,{Component} from 'react';

// import './App.css';
import Work from '../Work/index'
import About from '../About/index'
import Footer from '../Footer/index'
import Home from '../Home/index'
import Navbar from '../Navbar/index'
import Portfolio from '../Portfolio/index'
import Profile from '../Profile/index'
import SocialMedia from '../SocialMedia/index'
class index extends Component {
  render(){
    return (
      <div className="index">
        <Home/>
        <Work/>
        <Portfolio/>
        <Profile/>
        <About/>
        <SocialMedia/>
        <Footer/>
       
        
      </div>
    );
  }
  
}
export default index;
