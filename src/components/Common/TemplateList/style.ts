import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const ItemsUl = styled.ul`
  display: flex;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;
export const ItemLi = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-family: "Pretendard";
  width: 42%;
  font-size: 1rem;
  background-color: #f1f1f1;

  @media ${({ theme }) => theme.windowSize.md} {
    width: 100%;
  }

  div {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ItemImg = styled.div`
  position: relative;
  height: 100%;

  img {
    box-shadow: 0px 2px 6px 1px;
    border-radius: 15px;
    width: 70%;
    height: 85%;
  }

  svg {
    position: absolute;
    right: 5px;
    bottom: 5px;
  }
`;
export const ItemInfo = styled.div`
  display: flex;
`;
