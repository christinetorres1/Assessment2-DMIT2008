import React from 'react'

import {PanelStyles, PanelTitle, PanelBody} from './styles'

import { ProductEditor } from "./../../components/products/ProductEditor"

function AddProductsPanel ({title, ...props}) {
    return (
        <PanelStyles>
            <PanelTitle>
                <h2>{title || "Display Panel" }</h2>
            </PanelTitle>
            <PanelBody>
                <ProductEditor/>
            </PanelBody>
        </PanelStyles>
    )
}

export default AddProductsPanel;