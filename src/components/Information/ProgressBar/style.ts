import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  margin: -20px;
  max-width: 768px;
  width: 100%;
  height: 10px;
  z-index: 999;
`;

export const CurrentPositionY = styled.div.attrs<{ $curScrollY: number }>(props => ({
  style: {
    width: `${props.$curScrollY}%`,
  },
}))`
  position: relative;
  background-color: #567073;
  z-index: 1000;
  height: 10px;
`;
