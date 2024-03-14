import styled from "styled-components";

type styleProps = {
  opacity: number;
};

export const ServeyFormContainer = styled.div`
  padding: 10px;
`;
export const ServeyFormChatUl = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const ServeyFormQuestionLi = styled.li<styleProps>`
  opacity: ${props => props.opacity};
  transition: opacity 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 10px;

  #goto-information {
    background-color: #f2f2eb;
    /* width: fit-content; */
    width: 100%;
    margin: 20px auto;
    padding: 15px 0;
    border-radius: 16px;
    font-size: 20px;
    color: #424242;
    border: 1px solid #ccc;
  }
`;
export const ServeyFormQuestionLiItem = styled.div`
  width: fit-content;
  max-width: 70%;
  background-color: #818c7b;
  border-radius: 16px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 15px 15px;
  color: white;
  transition: opacity 1s ease-in-out;
  text-align: start;
  word-break: keep-all;
  line-height: 20px;
`;
export const ServeyFormQuestionItem = styled.div`
  width: 50%;
  background-color: #818c7b;
  border-radius: 16px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 15px 15px;
  color: white;
  div {
    padding: 10px 10px;
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
  }

  button {
    border-radius: 5px;
    padding: 5px 10px;
    border: none;
    background-color: #f2f2eb;
  }
`;
export const ServeyFormAnsweredItem = styled.div`
  width: fit-content;
  background-color: #ffe4a6;
  border-radius: 16px;
  padding: 15px 15px;
  color: #424242;
  margin-left: auto;
`;
