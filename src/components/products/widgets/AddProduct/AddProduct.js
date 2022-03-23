import React, { useState } from "react";

import { useNumberFormat } from "hooks/useNumberFormat";

import { ProductEditor } from "components/products/ProductEditor";
import { AddProductStyles } from "./styles";
import  ProductPreview  from "assets/images/dark-chocolate.jpg";

import {useAddNewProduct} from 'hooks/useAddNewProduct'

function AddProduct({ children, ...props }) {

  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState('Product Name')
  const [productPrice, setProductPrice] = useState('0.00')
  const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null})
  const [productDescription, setProductDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus eros, dapibus ultricies lacus nec, suscipit dapibus est. Donec facilisis porttitor lacus, suscipit luctus urna pulvinar quis.')
  const [loading, productLoader] = useAddNewProduct();
  const formatter = useNumberFormat()

  function handleProductName (name) {
    setProductName(name)
  }

  function handleProductPrice (price) {
    setProductPrice(formatter(price))
  }

  function handleProductDescription (description) {
    setProductDescription(description)
  }
  
  function handleSubmit(e) {
    e.preventDefault();

    const productData = {
      productName,
      productPrice,
      productDescription
    }

    setIsWriting(true)
    productLoader(productData, productImage.file)
  }

  if(isWriting) {
    return <h1>Editor Feedback Component</h1>
  } else {
    return (
      <AddProductStyles {...props}>
        <ProductEditor 
        productName={productName} 
        productPrice={productPrice}
        productImage={productImage}
        productDescription={productDescription}
        handleProductName={handleProductName}
        handleProductPrice={handleProductPrice}
        setProductImage={setProductImage}
        handleProductDescription={handleProductDescription}
        handleSubmit={handleSubmit}
        />
      </AddProductStyles>
    );
  }
}

export default AddProduct;
