import styled from 'styled-components';

 
const Input = styled.input`
    width: ${props => props.width || "100%"};
    border:${props => props.border || "none"};;
    border-radius: ${props => props.radius || "3px"};;
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.19);
    font-size: ${props => props.fs || "1.125rem"};;
    padding: ${props => props.padding || "0.35rem 0.5rem"};;;

    ::placeholder{
        font-size: 14px;
        color: #94a3b8;
    }
    :focus{
        background-color: #f8fafc;
    }
`;

 

export{  Input } ;
 
