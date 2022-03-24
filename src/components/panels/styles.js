import styled from 'styled-components';

const PanelStyles = styled.section `
    flex: 1;
    box-shadow: 0 0 2px 1px #694E4E;
    background-color: #FFEDDB;
    color: #694E4E;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 1.5rem;
    border-radius: 5px;


`

const PanelTitle = styled.header `
    h2 {
        font-weight: bold;
        font-size: 40px;
        padding:0.5rem;
        border-radius: 3px;
        color: #694E4E;
    }
    padding: 1rem 2rem;
`

const PanelBody = styled.div `
    display: flex;
    margin: 3rem;

`

export {PanelStyles, PanelTitle, PanelBody}