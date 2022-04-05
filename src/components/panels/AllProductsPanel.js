import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';


import {PanelStyles, PanelTitle, PanelBody} from './styles'

import {auth} from 'libs/firebase'

import { ProductCard } from "components/productcard"

import { onAuthStateChanged } from 'firebase/auth';


import {useGetProducts} from "hooks/useGetProducts"

function AllProductsPanel ({title, ...props}) {
    const productData = useGetProducts()

   

    const [isUser, setIsUser ] = useState(false);
    const nav = useNavigate()

   

    onAuthStateChanged(auth, (user) => {
        if (user ) {
            setIsUser(true)
        } else {
            setIsUser(false);
            nav("/");
        }
    });

    if(isUser) {
        return (
            <PanelStyles>
                <PanelTitle>
                    <h2>{title || "Display Panel" }</h2>
                </PanelTitle>
                <PanelBody>
                    { productData? productData.map(product => <ProductCard  key={product.uid} product={product}/>) : <p>loading..</p>}
                </PanelBody>
            </PanelStyles>
        )


    }

    return null;
    

}

export default AllProductsPanel;