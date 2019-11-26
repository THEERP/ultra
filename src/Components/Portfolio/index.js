import React,{Component,useState,useEffect} from 'react';
import axios from 'axios'
import {PortfolioSection,PortfolioTitle,Span,PortfolioList,PortfolioItem,Div,Image,Overlay,OverlaySpan} from  './style.js';
const Portfolio=()=>{
    const [images,setImage] = useState([])// state = {imge:[]}  for uptate value :: imge : setImge()
    useEffect(()=>{
        axios.get('js/data.json').then(res=>{
            setImage(res.data.portfolio)
        })
    },[])
    // componentDidMount(){
    //     axios.get('js/data.json').then(res=>{
    //         this.setState({imge:res.data.portfolio})
            
    //     })
    // }
    const portfolioImg = images.map(image=>{
        return(
            <Div key = {image.id}>
                <Image src={image.image} alt="" />
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </Div>
        )
    })
    return(
        <PortfolioSection>
        <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
        <PortfolioList>
            <PortfolioItem  active >All</PortfolioItem>
            <PortfolioItem>HTML</PortfolioItem>
            <PortfolioItem>Photoshop</PortfolioItem>
            <PortfolioItem>Wordpress</PortfolioItem>
            <PortfolioItem>Mobile</PortfolioItem>
        </PortfolioList>
        
        <div class="box">
           {portfolioImg}
        </div>
        
    </PortfolioSection>
    )
}

export default Portfolio