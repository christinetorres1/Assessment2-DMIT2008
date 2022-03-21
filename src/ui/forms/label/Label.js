
import styled from 'styled-components';


const Label = styled.label`
    width: ${props => props.width || "100%"};
    font-size: ${props => props.fs || '14px'};;
    color: ${props => props.color || "#475569" };
    padding: ${props => props.padding || '0'};;
    margin: ${props => props.margin || '0'};;
`;
export{ Label} ;
