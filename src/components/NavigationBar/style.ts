import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  max-width: 768px;
  width: 100%;
  background-color: #f5f5dc;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 70px;

  font-size: 14px;
  z-index: 10000;

  div {
    position: relative;
    padding: 10px;

    &::after {
      content: "";
      position: absolute;
      top: 15%;
      bottom: 15%;
      right: 0;
      width: 1px;
      background: #ccc;
    }

    &:last-child::after {
      display: none;
    }
  }
`;

export const SearchDiv = styled.div`
  position: relative;
`;

export const SearchButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  font-size: 14px;
  background-color: transparent;
  cursor: pointer;

  border-radius: 12px;
  transition-duration: 300ms;

  @media (hover: hover) {
    &:hover {
      background-color: #dbdbc5;
    }
  }
`;

export const NavLinkEl = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  border-radius: 12px;
  transition-duration: 300ms;

  @media (hover: hover) {
    &:hover {
      background-color: #dbdbc5;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
