import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  input {
    width: 70%;
    height: 39px;
    background-color: #eee;
    border: none;
    outline: none;
    padding-left: 10px;
  }
  button {
    background-color: #eee;
    width: 10%;
    height: 41px;
    padding: 0 10px;
  }

  border-bottom: 1px solid #d5d5d5;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export const BackLink = styled.div`
  width: 10%;
  text-align: left;
  cursor: pointer;
  svg {
    text-align: left;
  }
`;
