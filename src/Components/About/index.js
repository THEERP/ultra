import React,{Component} from 'react';
import {CreativeSection,CreativeInfo,InfoTitle,Span,InfoDesc,InfoDir,Ancor} from './style.js'
const About=()=>{
    return(
        <CreativeSection>
        <div class="container">
            <CreativeInfo>
                <InfoTitle><Span>This is</Span> Me</InfoTitle>
                <InfoDir>Creative Director</InfoDir>
                <InfoDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Ancor href="#">explicabo</Ancor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
                <InfoDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
            </CreativeInfo>
        </div>
    </CreativeSection>
    )
}
export default About