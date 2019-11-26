import React,{Component} from 'react';
import {HomeSection,HomeInformation,HomeTitle,HomeInfo,HomeDesc,HomeButton,Span} from './style.js';
const Home=()=>{
    return(
        <HomeSection>
        <div className="container">
            <HomeInformation>
                <HomeTitle>Hamza Nabil</HomeTitle>
                <HomeInfo>Creative Director</HomeInfo>
                <HomeDesc>
                    Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </HomeDesc>
                <HomeButton className="home-btn">Let's Begin</HomeButton>
            </HomeInformation>
        </div>
    </HomeSection>
    )
}

export default Home