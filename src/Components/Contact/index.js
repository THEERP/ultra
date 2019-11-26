import React,{Component,Fragment} from 'react';
import Footer from '../Footer/index'
import {ContactSection,Title,Span,Form,Input,FormInput,InputText,InputEmail,TextArea,InputSubmit} from './style.js'
const Contact=()=>{
    return(
        <Fragment>
        <ContactSection>
            <div class="container">
                <Title><Span>Drop </Span>Me A line</Title>
                <Form action="">
                    <FormInput>
                        <InputText type="text" placeholder="Your Name"/>
                        <InputEmail type="email" placeholder="Your Email"/>
                    </FormInput>
                    <Input type="text" sub placeholder="Your Subject"/>
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <InputSubmit type="submit" value="Send Message"/>
                </Form>
            </div>
            <Footer/>
        </ContactSection>
        
        </Fragment>
    )
}

export default Contact