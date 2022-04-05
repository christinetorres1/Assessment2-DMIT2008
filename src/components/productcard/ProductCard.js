import { ProductCardStyles, ProductDescription, ProductImage, ProductName, ProductPrice } from "./styles";
import React from "react";


function ProductCard({ children, product, ...props }) {
  
  const {productName, productPrice, imageURL, productDescription} = {...product}

  return (
    <ProductCardStyles {...props}>
      <ProductImage>
        <img src={imageURL} alt="chocolate" width="320" height="320"/>
      </ProductImage>
      <ProductName>{productName}</ProductName>
    <ProductPrice>{productPrice}</ProductPrice>
      <ProductDescription>{productDescription}</ProductDescription>
    </ProductCardStyles>
  );
}

export default ProductCard;
