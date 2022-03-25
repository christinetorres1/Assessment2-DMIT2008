import React from "react";


import { ProductPreviewStyles, ProductName, ProductDescription, ProductPrice, ProductImage,  } from "./styles";

function ProductPreview({ children, productName, productPrice, productImage, productDescription, ...props }) {
  return (
    <ProductPreviewStyles {...props}>
      <ProductImage>
        <img src={productImage.previewImage} alt="Chocolate" width="320" height="184"/>
      </ProductImage>
        
        <ProductName>{productName}</ProductName>
      
      <ProductPrice>${productPrice}</ProductPrice>
      <ProductDescription>{productDescription}</ProductDescription>
    </ProductPreviewStyles>
  );
}

export default ProductPreview;
