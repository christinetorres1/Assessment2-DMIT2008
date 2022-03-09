import styled from 'styled-components';

const PanelStyles = styled.body `
    width: 100%;
    box-shadow: 0 0 2px 1px grey;

    background-color: #FFEDDB;
    color: #694E4E;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0 0 0 1rem;

`

const PanelTitle = styled.h2 `
    padding: 1rem 2rem;
`

export {PanelStyles, PanelTitle}