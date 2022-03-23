 import React, {useCallback} from 'react'
 import {useDropzone} from 'react-dropzone'
 import {ProductImageDropBoxStyles} from './styles';


 function ProductImageDropBox  ({setProductImage, ...props}){
    const onDrop = useCallback(acceptedFiles => {
        const path = acceptedFiles[0] ;
         
        setProductImage({previewImage:URL.createObjectURL(path), file:acceptedFiles[0]})
      }, [])
      const {
        getRootProps,
        getInputProps,
      
        isFocused,
        isDragAccept,
        isDragReject,
      } = useDropzone({ accept: 'image/jpeg,image/jpg,image/png', maxFiles:1, onDrop });

 
      
   function workingThing(){
     console.log("look")
   }

     return( 
      
        <ProductImageDropBoxStyles {...getRootProps({isFocused, isDragAccept, isDragReject})}>
          <input {...getInputProps()} onChange={workingThing} />
          <p>Product Image Upload</p>
        </ProductImageDropBoxStyles>
       
       
      
     )
 }
 
 export default ProductImageDropBox 