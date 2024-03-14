import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: calc(1.5% + 70px);
  left: 50%;
  transform: translateX(-50%);
  max-width: 768px;
  width: 100%;
  height: 40px;
  margin: 0 auto;
`;

export const Wrapper = styled.div<{ $ArrowDirection: boolean }>`
  position: absolute;
  ${({ $ArrowDirection }) => ($ArrowDirection ? "left:20px" : "right:20px")};
  background-color: #567073;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
  transition-duration: 300ms;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-10%);
    }
  }
`;
