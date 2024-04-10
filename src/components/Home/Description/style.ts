import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  div {
    display: flex;
    align-items: center;
    width: 90%;
    padding: 12px 10px;
    margin: 10px auto;
    border-radius: 5px;
    background-color: #eee;

    div {
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: baseline;
      line-height: 23px;
    }
    img {
      width: 130px;
    }
  }
`;

export const CreateLink = styled(Link)`
  width: 70%;
  max-width: 500px;
  font-size: 24px;
  background-color: rgba(236, 236, 236, 0.8);
  margin-top: 20px;
  border-radius: 12px;
  padding: 15px 20px;
`;
