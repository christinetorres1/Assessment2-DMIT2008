import styled from 'styled-components';

const PageNotFoundStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FAEEE0;
    height: 100vh;
    color: #694E4E;
    text-align: center;

    h1 {
        color: #FAEEE0;
        background-color: #694E4E;
        padding: 1rem;
        font-size: 3rem;
        border-radius: 5px 5px 0 0;

    }

    

`;

const PageNotFoundNote = styled.p `
 

    padding-top: 1rem;
    font-size: 2rem;
`;

const PageNotFoundNotes = styled.section `
    padding-left: 2rem; 
`;

const PageNotFoundNoteTitle = styled.h2 `
    font-size: 2rem;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    border: 3px solid;
    padding: 2rem;
    border-radius: 0 0 5px 5px;
    margin-bottom: 2rem;
`;


export {PageNotFoundStyles, PageNotFoundNote, PageNotFoundNotes, PageNotFoundNoteTitle}