import React from "react";

import { ProductDataEntryFormStyles,ProductImage, ProductName, ProductPrice, ProductDescription } from "./styles";

import {Label, Input} from "ui/forms"

import { TextArea } from "ui/forms/textarea";

import { ProductImageDropBox} from "./../../products/ProductImageDropBox"

function ProductDataEntryForm({ children, ...props }) {
  return (
    <ProductDataEntryFormStyles {...props}>

        <ProductImage>
                <Label>ProductImage</Label>
                <ProductImageDropBox/>
              </ProductImage>

              <fieldset>
                <ProductName>
                  <Label>ProductName</Label>
                  <Input/>
                </ProductName>

                <ProductPrice>
                <Label>ProductPrice</Label>
                <Input/>
                </ProductPrice>        
              </fieldset>


              <ProductDescription>
              <Label>ProductDescription</Label>
              <TextArea/>
              </ProductDescription>


    </ProductDataEntryFormStyles>
  );
}

export default ProductDataEntryForm;
