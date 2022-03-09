import React from 'react'
import { SideBar } from '../sidebar';
import { Panels } from '../panels';

import { MainContentStyles, MainContentWrapper } from './styles'

function MainContent (props) {
    return (
        <MainContentStyles>
            <MainContentWrapper>
                <SideBar/>
                <Panels/>
            </MainContentWrapper>
        </MainContentStyles>
    );

}

export default MainContent;