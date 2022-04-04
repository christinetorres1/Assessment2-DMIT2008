import React from "react";

import { IoIosCheckmarkCircleOutline, IoIosCloudUpload } from "react-icons/io";

import { Button } from "ui/button";

import { useNavigate } from "react-router-dom";

import { EditorFeedBackStyles,  FeedBackMessage, FeedBack, FeedBackOption } from "./styles";

function EditorFeedBack({ children, status, writeCompleted, ...props }) {
  
  const nav = useNavigate();
  return (
    <EditorFeedBackStyles {...props}>
      {
        !status
        ?
        <FeedBack>
          <IoIosCheckmarkCircleOutline color="65C18C" size="12rem"/>
          <FeedBackMessage>
            Product is successfully uploaded !
          </FeedBackMessage>
        </FeedBack>
        :
        <FeedBack>
          <IoIosCloudUpload color="65C18C" size="12rem"/>
          <FeedBackMessage>
            Uploading New Product...
          </FeedBackMessage>
        </FeedBack>
      }
      
      <FeedBackOption>
        <Button 
          text="Add Another Product" 
          onClick={()=> writeCompleted(false)} 
          disabled={status}/>
        <Button 
          text="View All Products"
          onClick={()=> nav('/dashboard')}/>
      </FeedBackOption>
    </EditorFeedBackStyles>
  );
}

export default EditorFeedBack;
