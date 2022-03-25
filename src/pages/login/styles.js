import styled from 'styled-components';

const LoginPageStyles = styled.div `
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
    display: flex;
    justify-content: center;
    border-radius: 0 10px 10px 0;

    Button {
    font-size: 1rem;
    padding: 0.25rem;
    width: 8rem;
    border: 1px solid #694E4E;
  }

  Button:hover {
    background-color: #FAEEE0;
    color: #694E4E;
    border: 1px solid #694E4E;
    cursor: pointer;
  }
`;

const LoginPageLeft = styled.div `
    text-align: center;
    width: 100%;
    background-color: #EDCDBB;
    height: 25rem;
    padding-top: 7rem;
    border-radius: 10px 0 0 10px;
    
    h1 {
        font-size: 3rem;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }

    p {
        font-family: 'Brush Script MT', cursive;
        font-size: 1.5rem;
        padding-top: 1rem;
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

`;

const LoginPageForm = styled.form `
    width: 15rem;
    padding: 3.5rem 2rem;
    text-align: center;
    
    h2 {
        font-weight: bold;
        font-size: 2rem;
    }

    p {
        padding: 0.5rem 0 0 0;
        font-style: italic;
    
    }
`;

const InputControl = styled.div `
    padding-top: 1rem;
`;

const FormLabel = styled.label `

`;

const FormInput = styled.input `
    border: 1px solid #694E4E;
    border-radius: 3px;
    padding: 0.25rem;
    text-align: center;

    
`; 


export {LoginPageStyles, FormInput, InputControl, FormLabel, LoginPageForm, LoginPageContainer, LoginPageRight, LoginPageLeft};