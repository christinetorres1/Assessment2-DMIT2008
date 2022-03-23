import React from 'react'

import {PanelStyles, PanelTitle, PanelBody} from './styles'

import {AddProduct} from 'components/products/widgets/AddProduct'

function AddProductsPanel ({title, ...props}) {
    return (
        <PanelStyles>
            <PanelTitle>
                <h2>{title || "Display Panel" }</h2>
            </PanelTitle>
            <PanelBody>
                <AddProduct/>
            </PanelBody>
        </PanelStyles>
    )
}

export default AddProductsPanel;