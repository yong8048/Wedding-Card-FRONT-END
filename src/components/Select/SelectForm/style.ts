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

  font-size: 0.8rem;
  div {
    cursor: pointer;
    /* min-height: 415px; */
    display: flex;
    background-color: #f1f1f1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }

  img {
    box-shadow: 0px 2px 6px 1px;
    border-radius: 15px;
    width: 70%;
    height: 80%;
  }
`;

export const SelectFormItemInfo = styled.div`
  display: flex;
  background-color: white;
`;
