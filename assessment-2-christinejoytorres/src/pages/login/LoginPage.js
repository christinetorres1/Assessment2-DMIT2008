import React from "react";

import {Link, useNav} from 'react-router-dom'

// import { useNavigate } from "react-router-dom";

// import {BiMessageSquareError} from 'react-icons/bi'
// import {signInWithEmailAndPassword} from "firebase/auth"
// import {ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import {auth} from 'libs/firebase'
// import { Label } from "ui/forms";
// import { Input } from "ui/forms";
// import { SubmitButton } from "ui/buttons";
// import { LoginPageStyles, FormControl } from "./styles";

function LoginPage(props) {
    
    const nav = useNav();

    function onSignInHandler(e) {
        e.preventDefault();

        const isValidUser = true;

        if (isValidUser) {
            nav("/dashboard");
        }
    }
    
    return(
        <LoginPageStyles> 

            <LoginPageLeft>
                <h1>Chocolate store</h1>
                
            </LoginPageLeft>
            <LoginPageRight>

                <Link to="/dashboard">LogIn</Link>
            </LoginPageRight>

        </LoginPageStyles>



    )
  }
  
  export default LoginPage;