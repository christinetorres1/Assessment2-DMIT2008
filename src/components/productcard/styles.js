import styled from "styled-components";

const ProductCardStyles = styled.aside`
  width: 200px;
  align-self: stretch;
  margin: 0.75rem;
  padding: 0.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  box-shadow: 0 0 2px 1px #694E4E;
  background-color: #694E4E;
  border-radius: 3px;
  color: #FFEDDB;
`;

const ProductImage = styled.div`
  width: 100%;

  img {
    /* width: 100%; */
    height: 200px;
    padding-bottom: 1rem;


  }
`;

const ProductName = styled.h2 `
  font-weight: bold;
  font-size: 1.2rem;
`;

const ProductPrice = styled.p `

`;

const ProductDescription = styled.p `

  font-size: 14px;
`

export { ProductCardStyles, ProductImage, ProductName, ProductPrice, ProductDescription  };
