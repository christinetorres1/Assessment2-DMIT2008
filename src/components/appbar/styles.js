import styled from 'styled-components';

const AppBarStyles   = styled.nav`
    box-shadow:  0 0 2px 1px grey;
    padding: 0.5rem 1rem;    
    background-color: #FFEDDB;
    color: #694E4E;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 1.5rem;
`;

const AppBarItems = styled.ul`
   display:flex;
   justify-content: space-between;
   align-items:center;
   list-style: none;
`;

const AppBarItem = styled.li`
    font-size: 2rem;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    
`

const AppBarItemGroup = styled.li`
    
    span {
        padding: 1rem;
        
    }

`

export {AppBarStyles, AppBarItem, AppBarItems, AppBarItemGroup}

