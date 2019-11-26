import React,{Component} from 'react';
import axios from 'axios'
import {WorkSection,WorkTitle,Span,WorkPart,Icon,PartTitle,Line,PartDesc} from './style';
class Work extends Component {
    state = {
        works:[]
    }
    componentDidMount(){
        axios.get('js/data.json').then(res=>{
            this.setState({works:res.data.works})
            
        })
    }
    render(){
        const {works} = this.state;
        const worksList = works.map(work=>{
            return(
                <WorkPart first = {work.id} key={work.is}>
                    <Icon className = {work.icon_name}></Icon>
                    <PartTitle>{work.title}</PartTitle>
                    <Line/>
                    <PartDesc>
                        {work.body}
                    </PartDesc>
                </WorkPart>
            )
        })
        return(
            <WorkSection>
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {worksList}
                
            </div>
        </WorkSection>
        )
    }
   
}

export default Work