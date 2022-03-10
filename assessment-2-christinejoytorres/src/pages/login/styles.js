import styled from 'styled-components';

const LoginPageStyles = styled.body `
    background-color: #694E4E;
    height: 100vh;
    color:  #694E4E;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

const LoginPageRight = styled.div `
    background-color: #FFEDDB;
    height: 25rem;
    width: 100%;

    h2 {
        font-size: 2rem;
    }
`;

const LoginPageLeft = styled.div `
    
    width: 100%;
    background-color: #EDCDBB;
    height: 25rem;
    padding-left: 1.5rem;
    padding-top: 7rem;
    
    h1 {
        display: flex;
        

        
        font-size: 2.5rem;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }

    p {
        font-family: 'Brush Script MT', cursive;
        font-size: 1.5rem;
        padding-top: 2rem;
    }

    p:last-child {
        text-align: center;
        padding: 0;
        font-size: 3rem;
    }
`;

const LoginPageContainer = styled.div `
    display: flex;
    align-items: center;    
    justify-content: center;
    margin: 0 auto;
    width: 50%;
    height: auto;
    box-shadow: 0 0 1px 1px grey;
`;

const LoginPageForm = styled.form `
    display: flex;
    width: 15rem;
    flex-wrap: wrap;
    padding: 4rem 2rem;
    margin: auto 0;

`;

const InputControl = styled.div `
    padding-top: 1rem;
`;

const FormLabel = styled.label `

`;

const FormInput = styled.input `

`;


export {LoginPageStyles, FormInput, InputControl, FormLabel, LoginPageForm, LoginPageContainer, LoginPageRight, LoginPageLeft};