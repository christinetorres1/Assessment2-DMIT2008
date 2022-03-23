import React,{ useState } from "react";

import { AppBar } from "../../components/appbar";
import MainContent from "../../components/maincontent/MainContent";

import { onAuthStateChanged  } from "firebase/auth";
import { auth } from "libs/firebase";
import { useNavigate } from  'react-router-dom'



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
                <MainContent/>
                </>                
            )

        } else {
            return null
        }
}

export default DashBoardPage;