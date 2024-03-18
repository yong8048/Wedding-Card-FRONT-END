import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-image: url("/Main/BackGround2.png");
  background-size: cover;
  /* background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/Main/BackGround.png"); */
  height: 100%;
  padding: 20px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  padding: 12px 20px;
  margin: 20px auto;
  font-size: 24px;
  border-radius: 12px;
  background-color: rgba(236, 236, 236, 0.8);
  /* color: white; */
`;

export const CreateLink = styled(Link)`
  display: inline-block;
  font-size: 24px;
  background-color: rgba(236, 236, 236, 0.8);
  margin-top: 20px;
  border-radius: 12px;
  padding: 12px 20px;
`;
