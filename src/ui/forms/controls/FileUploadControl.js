 import React, {useCallback} from 'react'
 import {useDropzone} from 'react-dropzone'
 import styled from 'styled-components';

 const getColor = (props) => {
   if (props.isDragAccept) {
       return '#00e676';
   }
   if (props.isDragReject) {
       return '#ff1744';
   }
   if (props.isFocused) {
       return '#2196f3';
   }
   return '#eeeeee';
 }
 
 const Container = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 20px;
   border-width: 2px;
   border-radius: 2px;
   border-color: ${props => getColor(props)};
   border-style: dashed;
   background-color: #fafafa;
   color: #bdbdbd;
   outline: none;
   transition: border .24s ease-in-out;
 `;

 function FileUploadControl  (props){
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
      }, [])
      const {
        getRootProps,
        getInputProps,
      
        isFocused,
        isDragAccept,
        isDragReject,
      } = useDropzone({ accept: 'image/jpeg,image/png', maxFiles:1, onDrop });

 
      
   

     return( 
        <div className="container">
        <Container {...getRootProps({isFocused, isDragAccept, isDragReject})}>
          <input {...getInputProps()}  />
          <p>Drag 'n' drop some the product image file here</p>
        </Container>
       
       
      </div>
     )
 }
 
 export default FileUploadControl 