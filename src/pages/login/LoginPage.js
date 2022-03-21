import React, {useState} from "react";


import { signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "libs/firebase"

import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {useNavigate} from 'react-router-dom'
import Button from "ui/button/Button";

import { GiChocolateBar } from "react-icons/gi";

import { LoginPageStyles, LoginPageContainer, FormInput, FormLabel, InputControl, LoginPageForm, LoginPageLeft, LoginPageRight } from "./styles";

function LoginPage(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nav = useNavigate();


    const notify = (error) => toast.error(error.code,{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
  
    });


    function onSignInHandler(e) {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                nav("/dashboard");
            })

        .catch((error) => {
            notify(error);

        })

        
    }
    
    return (
        <>
            <LoginPageStyles> 
                <ToastContainer/>
                <LoginPageContainer>
                    <LoginPageLeft>

                        <h1>Chocolate store</h1>  
                        <p>Canada's chocolatier since 2022</p>
                        <p><GiChocolateBar/></p>
                        
                    </LoginPageLeft>
                    <LoginPageRight>
                        <LoginPageForm onSubmit={onSignInHandler}>
 
                            <h2>Welcome!</h2>
                            <p>Please Sign In.</p>
                            <InputControl>
                                <FormLabel>Email</FormLabel>
                                <FormInput type="Email" id="userEmail" name="userEmail" placeholder="johndoe@email.com" required onChange={(e) => setEmail(e.target.value.trim())} />
                            </InputControl>
                            <InputControl>
                                <FormLabel>Password</FormLabel>
                                <FormInput type="password" id="userPassword" name="userPassword" placeholder="your password" required onChange={(e) => setPassword(e.target.value.trim())} />
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