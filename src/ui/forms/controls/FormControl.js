 import React from 'react'
 import styled from 'styled-components';
 import{Label} from 'ui/forms/label'
 import {Input} from 'ui/forms/input'


 const FormControlStyles = styled.div`
   
 `;

 function FormControl  ({id, label, ...props}){
     return( 
         <FormControlStyles {...props}>
             <Label htmlFor={id}>{label}</Label>
             <Input id={id} {...props} />
         </FormControlStyles>
     )
 }
 
 export default FormControl 