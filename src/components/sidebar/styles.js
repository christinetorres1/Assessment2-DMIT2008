import styled from 'styled-components';

const SideBarStyles = styled.aside `
    box-shadow: 2px 0 4px -2px #694E4E;
    width: 20rem;
    height: calc(100vh - 64px);
    background-color: #FFEDDB;
    color: #694E4E;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 2rem;

    Button {
    font-size: 1rem;
    padding: 0.5rem;
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

const SideBarItems =styled.ul `
    display: flex;
    align-items: center;
    gap: 0.25rem;
    h2 {
        font-size: 20px;
        font-weight: bold;
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