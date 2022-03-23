import React from 'react'

import {PanelStyles, PanelTitle, PanelBody} from './styles'

function AllProductsPanel ({title, ...props}) {
    return (
        <PanelStyles>
            <PanelTitle>
                <h2>{title || "Display Panel" }</h2>
            </PanelTitle>
            <PanelBody>

            </PanelBody>
        </PanelStyles>
    )
}

export default AllProductsPanel;