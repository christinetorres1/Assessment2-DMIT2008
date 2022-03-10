import React from "react";

import {useNavigate} from 'react-router-dom'
import Button from "../../ui/button/Button";

import { GiChocolateBar } from "react-icons/gi";

import { LoginPageStyles, LoginPageContainer, FormInput, FormLabel, InputControl, LoginPageForm, LoginPageLeft, LoginPageRight } from "./styles";

function LoginPage(props) {
    
    const nav = useNavigate();

    function onSignInHandler(e) {
        e.preventDefault();

        const isValidUser = true;

        if (isValidUser) {
            nav("/dashboard");
        }
    }
    
    return (
        <>
            <LoginPageStyles> 
                <LoginPageContainer>
                    <LoginPageLeft bgImg="banner">

                        <h1>Chocolate store</h1>  
                        <p>Canada's chocolatier since 2022</p>
                        <p><GiChocolateBar/></p>
                        
                    </LoginPageLeft>
                    <LoginPageRight>
                        <LoginPageForm onSubmit={onSignInHandler}>

                            <h2>Sign In</h2>
                            <InputControl>
                                <FormLabel>Email</FormLabel>
                                <FormInput type="Email" id="userEmail" name="userEmail"/>
                            </InputControl>
                            <InputControl>
                                <FormLabel>Password</FormLabel>
                                <FormInput type="password" id="userPassword" name="userPassword"/>
                            </InputControl>
                            <Button text="Sign In" />
                        
                        </LoginPageForm>
                    </LoginPageRight>
                </LoginPageContainer>
    
            </LoginPageStyles>
        
        </>

    )
  }
  
  export default LoginPage;