import React from "react";

import { ProductEditorStyles } from "./styles";

import {ProductDataEntryForm} from './../ProductDataEntryForm';
import {ProductPreview} from './../ProductPreview'

function ProductEditor({ children, handleSubmit, productName, productPrice, productImage, productDescription, handleProductName, handleProductPrice, setProductImage, handleProductDescription, ...props }) {
  
  return (
    <ProductEditorStyles {...props}>
      <ProductDataEntryForm 
      handleProductName={handleProductName}
      handleProductPrice={handleProductPrice}
      setProductImage={setProductImage}
      handleProductDescription={handleProductDescription}
      handleSubmit={handleSubmit}
      />
      <ProductPreview 
      productName={productName}
      productPrice={productPrice}
      productImage={productImage}
      productDescription={productDescription}
      />
    </ProductEditorStyles>
  );
}

export default ProductEditor;
