import React,{Component} from 'react';
import axios from 'axios'

import {SocialMediaSection,Social,Icon,P,Span} from  './style.js';
class SocialMedia extends Component{
    state = {
        social:[]
    }
    componentDidMount(){
        axios.get('js/data.json').then(res=>{
           this.setState({social:res.data.social}) 
        })
    }
    
    render(){
        const {social} = this.state;
        console.log(social);
        
        const listSocial = social.map((socialItem)=> {
            return(
                <Social key = {socialItem.id} socialtype = {socialItem.id}>
               
                <Icon className={socialItem.icon}></Icon>
                <P>
                    <Span info1>{socialItem.title}</Span>
                    <Span info2>{socialItem.body}</Span>
                </P>
            </Social>
            )
        })
        return(
            <SocialMediaSection>
                {listSocial}
            </SocialMediaSection>
        )
    }
}

export default SocialMedia