import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: calc(1.5% + 70px);
  left: 50%;
  transform: translateX(-50%);
  background-color: #bfa380;
  padding: 12px 16px 12px 22px;
  border-radius: 6px;
  z-index: 100;
  cursor: pointer;
  transition-duration: 300ms;

  @media (hover: hover) {
    &:hover {
      transform: translate(-50%, -10%);
    }
  }

  span {
    color: #363636;
    letter-spacing: 6px;
    font-weight: bold;
  }
`;
