import styled from "styled-components";

const EditorFeedBackStyles = styled.aside`
  width: 80%;
  margin: 4rem auto 0;
  text-align: center;
`;

const FeedBackMessage = styled.figcaption`
  font-size: 1.75rem;
  font-weight: 600;
  color: #65C18C;
`;

const FeedBack = styled.figure`

`;

const FeedBackOption = styled.footer`
  margin-top: 1rem;
  Button {
    margin: 1rem;
    width: fit-content;
    font-size: 1rem;
    border: 1px solid #694E4E;
  }

  Button:hover {
    background-color: #FAEEE0;
    color: #694E4E;
    border: 1px solid #694E4E;
    cursor: pointer;
  }
`;

export { EditorFeedBackStyles, FeedBackMessage, FeedBack, FeedBackOption };
