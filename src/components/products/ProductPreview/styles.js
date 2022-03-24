import styled from "styled-components";

const ProductPreviewStyles = styled.aside`
  max-width:360px;
  align-self: stretch;
  padding: 3rem 2rem;
  background-color: #694E4E;
  color: #FFEDDB;
  border-radius: 5px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
`;

const ProductImage = styled.div`
  margin: 1rem auto 0;
  width: 300px;

  img {
    width: 100%;
    height: auto;
    padding-bottom: 1rem;
  }
`;

const ProductName = styled.div`

  font-weight: bold;
  font-size: 2rem;
  line-height: 2.5rem;
  letter-spacing: -0.5px;
  word-wrap: break-word;

`;

const ProductPrice = styled.p`
  font-size: 2rem;
  font-weight: 100;
  letter-spacing: -1px;
  margin-top: -0.3rem;
  margin-bottom: 0.25rem;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
`;


export { ProductPreviewStyles, ProductImage, ProductName, ProductPrice, ProductDescription };
