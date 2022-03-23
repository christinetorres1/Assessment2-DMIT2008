import React from "react";

import { EditProductStyles } from "./styles";

function EditProduct({ children, ...props }) {
  return (
    <EditProductStyles {...props}>
      <h2>EditProduct Component</h2>
      {children}
    </EditProductStyles>
  );
}

export default EditProduct;
