import styled from "styled-components";

export const SelectFormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
`;
export const SelectFormItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-family: "Pretendard";
  cursor: pointer;

  div {
    /* min-height: 415px; */
    display: flex;
    background-color: #f1f1f1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    box-shadow: 0px 0px 1px 0px;
    border-radius: 10px;
    width: 70%;
    height: 80%;
  }
`;
