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
  gap: 5px;
  margin: 30px 10px;
`;
export const ServeyFormQuestionLiItem = styled.div`
  width: fit-content;
  background-color: #818c7b;
  border-radius: 16px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 15px 15px;
  color: white;
  transition: opacity 1s ease-in-out;
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
  }
`;
export const ServeyFormAnsweredItem = styled.div`
  width: fit-content;
  background-color: #818c7b;
  border-radius: 16px;
  padding: 15px 15px;
  color: white;
  margin-left: auto;
`;
