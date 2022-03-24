import { ProductCardStyles, ProductDescription, ProductImage, ProductName, ProductPrice } from "./styles";
import React from "react";

import placeholderImage from "./../../assets/images/dark-chocolate.jpg"


function ProductCard({ children, ...props }) {
  
  return (
    <ProductCardStyles {...props}>
      <ProductImage>
        <img src={placeholderImage} alt="chocolate"/>
      </ProductImage>
      <ProductName>Chocolate Name</ProductName>
      <ProductPrice>$0.00</ProductPrice>
      <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor ut sollicitudin ac, hendrerit nec mi. </ProductDescription>
    </ProductCardStyles>
  );
}

export default ProductCard;
