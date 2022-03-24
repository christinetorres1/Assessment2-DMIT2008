import React from 'react'
 import { Link } from 'react-router-dom';
 import styled from 'styled-components';

const ProductOptionStyles = styled.ul`
    margin: 1rem 1.5rem 6rem 1.7rem;
    

    a{
        color: #694E4E;
        font-size:16px;
    }

        
    
`;

 function ProductOptions  (props){
     return( 
         <>
       
         <ProductOptionStyles>
             <li>
                 <Link to="/dashboard">View all Products</Link>
             </li>
             <li>
               <Link to="add">Add Product</Link>
             </li>
             <li>
             <Link to="update">Update Product</Link>
             </li>
         </ProductOptionStyles>
         </>
     )
 }
 
 export default ProductOptions 