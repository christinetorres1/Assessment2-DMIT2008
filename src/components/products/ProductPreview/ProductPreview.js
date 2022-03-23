import React from "react";

import { ProductPreviewStyles } from "./styles";

function ProductPreview({ children, ...props }) {
  return (
    <ProductPreviewStyles {...props}>
      <h2>ProductPreview Component</h2>
      {children}
    </ProductPreviewStyles>
  );
}

export default ProductPreview;
