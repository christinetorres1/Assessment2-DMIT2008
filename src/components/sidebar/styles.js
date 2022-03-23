import styled from 'styled-components';

const SideBarStyles = styled.aside `
    box-shadow: 2px 0 4px -2px grey;
    width: 20rem;
    height: calc(100vh - 64px);
    background-color: #FFEDDB;
    color: #694E4E;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 2rem;
`;

const SideBarItems =styled.ul `
    display: flex;
    align-items: center;
    gap: 0.25rem;
    h2 {
        font-size: 20px;
    }
    svg {
        vertical-align: middle;
    }

`;

const SideBarItem = styled.li `
    padding: 0.75rem 0;
    span {
        padding-left: 0.5rem;
    }
`;


export {SideBarStyles, SideBarItems, SideBarItem}