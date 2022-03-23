import React from "react";

import { ProductDataEntryFormStyles,ProductImage, ProductName, ProductPrice, ProductDescription } from "./styles";

import {Label, Input} from "ui/forms"

import { TextArea } from "ui/forms/textarea";

import { ProductImageDropBox} from "./../../products/ProductImageDropBox"

import {Button} from "ui/button"

function ProductDataEntryForm({ children, handleSubmit, handleProductName, handleProductPrice, handleProductDescription, setProductImage, ...props }) {
  return (
    <ProductDataEntryFormStyles {...props} onSubmit={handleSubmit}>

            <ProductImage>
              <Label>ProductImage</Label>
              <ProductImageDropBox setProductImage={setProductImage}/>
            </ProductImage>

              <fieldset>
                <ProductName>
                  <Label>ProductName</Label>
                  <Input onChange={(e) => handleProductName(e.target.value.trim())} maxLength={30}/>
                </ProductName>

                <ProductPrice>
                <Label>ProductPrice</Label>
                <Input onChange={(e) => handleProductPrice(e.target.value.trim())} maxLength={8}/>
                </ProductPrice>        
              </fieldset>


              <ProductDescription>
              <Label>ProductDescription</Label>
              <TextArea onChange={(e)=>handleProductDescription(e.target.value.trim())} rows={6}/>
              </ProductDescription>
            
              <div>
                <Button text="Add Product" type="submit" width="100%"/>
              </div>

    </ProductDataEntryFormStyles>
  );
}

export default ProductDataEntryForm;
