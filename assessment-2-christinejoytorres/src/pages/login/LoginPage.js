import React from "react";

import {Link} from 'react-router-dom'

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
    return(
        <header> 
            <h1>LogIn Page</h1>
        <ul>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </ul>
        </header>



    )
  }
  
  export default LoginPage;