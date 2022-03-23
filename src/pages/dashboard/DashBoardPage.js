import React,{ useState } from "react";



import { onAuthStateChanged  } from "firebase/auth";
import { auth } from "libs/firebase";

import { Outlet, useNavigate } from  'react-router-dom';

import { AppBar } from "../../components/appbar";
import { SideBar } from "components/sidebar";

import {DashBoardPageStyles} from "./styles"


function DashBoardPage (props) {
    const [isUser, setIsUser] = useState(false)

    const nav = useNavigate();

        onAuthStateChanged(auth, (user) => {
            if(user) {
                setIsUser(true)
            }else {
                setIsUser(false)
                nav('/')
            }
        })


        if(isUser){
            return (
                <>
                <AppBar/>
                <DashBoardPageStyles>
                 <SideBar/>
                <Outlet/>                   
                </DashBoardPageStyles>
                </>                
            )

        } else {
            return null
        }
}

export default DashBoardPage;