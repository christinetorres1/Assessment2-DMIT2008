import styled from 'styled-components';

const PanelStyles = styled.section `
    flex: 1;
    box-shadow: 0 0 2px 1px grey;
    background-color: #FFEDDB;
    color: #694E4E;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 1.5rem;

`

const PanelTitle = styled.header `
    h2 {
        background-color: whitesmoke;
        padding:0.5rem;
        border-radius: 3px;
        color: brown;
    }
    padding: 1rem 2rem;
`

const PanelBody = styled.div `
    margin: 3rem;

`

export {PanelStyles, PanelTitle, PanelBody}