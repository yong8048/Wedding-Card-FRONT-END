import styled from "styled-components";

export const Container = styled.div<{ $ArrowDirection: boolean }>`
  position: fixed;
  bottom: calc(1.5% + 70px);
  ${({ $ArrowDirection }) => ($ArrowDirection ? "left:20%" : "right:20%")};
`;

export const Wrapper = styled.div`
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
