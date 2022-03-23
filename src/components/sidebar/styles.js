import styled from 'styled-components';

const SideBarStyles = styled.nav `
    box-shadow: 0 0 2px 1px grey;
    width: 20rem;
    height: calc(100vh - 64px);
    min-height: 800px;
    background-color: #FFEDDB;
    color: #694E4E;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

`;

const SideBarItems =styled.ul `
    padding: 2rem;
    list-style: none;


`;

const SideBarItem = styled.li `
    padding: 0.75rem 0;
    span {
        padding-left: 0.5rem;
    }
`;

const LogOut = styled.li `
    background-color: #694E4E;
    color: #FFEDDB;
    border-radius: 3px;
    padding: 0.5rem;
    width: 6rem;
    margin-top: 2rem;

    span {
        padding-left: 0.5rem;
    }
 `;

export {SideBarStyles, SideBarItems, SideBarItem, LogOut}