import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  p {
    margin-left: 20px;
    text-align: left;
    font-weight: bold;
  }
`;

export const RecentlyUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 5px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 16px;
    text-align: left;

    span {
      width: 100%;
    }

    svg {
      margin: 0 10px;
    }
  }
`;

export const RecommendUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;

  li {
    margin: 5px;
    padding: 5px 10px;
    border: 1px solid #aaa;
    border-radius: 15px;
    font-size: 14px;
    cursor: pointer;
  }
`;

export const RecentlyWord = styled.div`
  margin-bottom: 20px;
`;
export const RecommendWord = styled.div``;
