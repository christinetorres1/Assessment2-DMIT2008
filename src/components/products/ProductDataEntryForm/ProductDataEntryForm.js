import React from "react";

import { ProductDataEntryFormStyles, ProductImage, ProductName, ProductPrice, ProductDescription } from "./styles";

import {Label, Input, TextArea} from "ui/forms"

import { ProductImageDropBox} from "./../../products/ProductImageDropBox"

function ProductDataEntryForm({ children, ...props }) {
  return (
    <ProductDataEntryFormStyles {...props}>
      <ProductImage>
        <Label>ProductImage</Label>
        <ProductImageDropBox/>
      </ProductImage>

      <ProductName>
        <Label>ProductName</Label>
        <Input/>
      </ProductName>

      <ProductPrice>
      <Label>ProductPrice</Label>
      <Input/>
      </ProductPrice>

      <ProductDescription>
      <Label>ProductDescription</Label>
      <TextArea/>
      </ProductDescription>

    </ProductDataEntryFormStyles>
  );
}

export default ProductDataEntryForm;
