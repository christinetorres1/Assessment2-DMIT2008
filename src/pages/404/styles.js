import styled from 'styled-components';

const PageNotFoundStyles = styled.body`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background-color: #FAEEE0;
    height: 100vh;
    color: #694E4E;
`;

const PageNotFoundNote = styled.p `
       
    padding-top: 1rem;
    font-size: 2rem;
`;

const PageNotFoundNotes = styled.section `
    padding-left: 2rem; 
`;

const PageNotFoundNoteTitle = styled.h1 `
    font-size: 5rem;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`;

export {PageNotFoundStyles, PageNotFoundNote, PageNotFoundNotes, PageNotFoundNoteTitle}