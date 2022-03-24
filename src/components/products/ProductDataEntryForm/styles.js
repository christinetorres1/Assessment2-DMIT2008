import styled from "styled-components";

const ProductDataEntryFormStyles = styled.form`

  width: 380px;

  input:focus, textarea:focus {
    border-color: #694E4E;
    outline-color: #694E4E;
  }

  fieldset {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  Label {
    font-size: 1rem;
    color: #694E4E;
  }

  Button {
    font-size: 1rem;
    padding: 1rem;
    width: 10rem;
    border: 1px solid #694E4E;
  }

  Button:hover {
    background-color: #FAEEE0;
    color: #694E4E;
    border: 1px solid #694E4E;
    cursor: pointer;
  }


`;


const ProductImage = styled.div `
  
`;

const ProductName = styled.div `
    flex: 3.5;
`;

const ProductPrice = styled.div `
  flex: 1.5;
`;

const ProductDescription = styled.div `
  textarea {
    resize:none;
  }
`;

export { ProductDataEntryFormStyles, ProductImage, ProductName, ProductPrice, ProductDescription};
