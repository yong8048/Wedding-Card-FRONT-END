import styled from "styled-components";

export const TemplateContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Page1Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 80%;
  }
`;
export const Page1Date = styled.div`
  display: flex;
  align-items: flex-start;
  width: 80%;
  padding-left: 10px;
  margin-left: 10px;
  margin-bottom: 30px;
  border-left: 1px solid black;
`;
export const Page1Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 80%;
  margin: 10px 0;

  h1 {
    font-size: x-large;
    margin-bottom: 15px;
  }
`;
