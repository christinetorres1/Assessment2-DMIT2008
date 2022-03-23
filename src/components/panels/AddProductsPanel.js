import React from 'react'

import {PanelStyles, PanelTitle, PanelBody} from './styles'

function AddProductsPanel ({title, ...props}) {
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

export default AddProductsPanel;