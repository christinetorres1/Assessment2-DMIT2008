import React from 'react'

import {Link} from 'react-router-dom'

import { IoSadOutline } from "react-icons/io5";

import {PageNotFoundStyles, PageNotFoundNoteTitle, PageNotFoundNote, PageNotFoundNotes} from "./styles"

function PageNotFound (props) {
    return (
        <>
        <PageNotFoundStyles>
            <PageNotFoundNotes>
                <PageNotFoundNoteTitle>
                    404 error: Page Not Found <IoSadOutline/>
                </PageNotFoundNoteTitle>
                
            </PageNotFoundNotes>

            <PageNotFoundNotes>
                <PageNotFoundNote>
                    Go back to <Link to="/">LogIn</Link> page.
                </PageNotFoundNote>
            </PageNotFoundNotes>
            
        </PageNotFoundStyles>
        </>
    );

}

export default PageNotFound
