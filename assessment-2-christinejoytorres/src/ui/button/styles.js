import styled from "styled-components";

const ButtonStyles = styled.button `
    background-color: #694E4E ;
    border: ${props => props.border || 'none'};;
    border-radius: 3px;
    margin-top: 1rem;
    box-shadow: 0 0 3px 1px rgb(220, 220, 220);
    padding: 0.5rem 1rem;
    color: #FFEDDB;
    font-size: 0.75rem;
    width: 5rem;
`;

export {ButtonStyles};