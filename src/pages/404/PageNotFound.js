import React, { useState } from 'react'

import {Link} from 'react-router-dom'

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'libs/firebase';

import { IoSadOutline } from "react-icons/io5";

import {PageNotFoundStyles, PageNotFoundNoteTitle, PageNotFoundNotes} from "./styles"

function PageNotFound (props) {
    const [isUser, setIsUser] = useState(false)

    onAuthStateChanged(auth, (user)=> {
        if(user) {
            setIsUser(true)
        } else {
            setIsUser(false)
        }
    })
    
    return (
        <>
        <PageNotFoundStyles>
           
            <PageNotFoundNotes>
                    <h1>Chocolate Store</h1>
                
                <PageNotFoundNoteTitle>
                    404 error: Page Not Found ! <IoSadOutline/>
                </PageNotFoundNoteTitle>

                {
                    isUser? <Link to="/dashboard">Take me back to safety</Link> : <Link to="/">Take me back to safety</Link>
                }               
                {/* <PageNotFoundNote>
                    Go back to <Link to="/">LogIn</Link> page.
                </PageNotFoundNote> */}
            </PageNotFoundNotes>
            
        </PageNotFoundStyles>
        </>
    );

}

export default PageNotFound
