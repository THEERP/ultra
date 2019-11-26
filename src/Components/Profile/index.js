import React,{Component,useEffect,useState} from 'react';
import axios from 'axios';
import {ProfileSection,ProfileSkills,ProfileList,ProfileItem,I_Span,Web,Skills,SkillsDesc,Span,Bar,Title,Perc,Parent,ProfileTitle,SkillsTitle,P_Span,SkillsSpan} from  './style.js';
const Profile=()=>{
   const [skills,setSkills] = useState([]);
   useEffect(()=>{
       axios.get('js/data.json').then((res=>{
           setSkills(res.data.skills)
       }))
   })
   const listSkills = skills.map(skill=>{
       return(
        <Bar key={skill.id}>
        <Title>{skill.title}</Title>
        <Perc>{skill.perc}</Perc>
        <Parent>
            <Span sq = {skill.perc} ></Span>
        </Parent>
    </Bar>
       )
   })
    return(
        <ProfileSkills>
            <div class="container">
                <ProfileSection>
                    <ProfileTitle><P_Span>My </P_Span>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <I_Span>Name</I_Span>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <I_Span>Birthday</I_Span>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <I_Span>Phone</I_Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <I_Span>Email</I_Span>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <I_Span>Website</I_Span>
                            <Web>www.google.com</Web>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSection>
                
                <Skills>
                    <SkillsTitle>Some <SkillsSpan>skills</SkillsSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                   {listSkills}
                </Skills>
                
            </div>
        </ProfileSkills>
            
    )
}

export default Profile