import React from "react";

import { ProductEditorStyles } from "./styles";

import {ProductDataEntryForm} from './../ProductDataEntryForm';
import {ProductPreview} from './../ProductPreview'

function ProductEditor({ children, ...props }) {
  return (
    <ProductEditorStyles {...props}>
      <ProductDataEntryForm/>
      <ProductPreview/>
    </ProductEditorStyles>
  );
}

export default ProductEditor;
