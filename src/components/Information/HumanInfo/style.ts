import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  border-bottom: 1px solid #dcdcdc;
  padding: 40px 0 20px;

  h1 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 40px;

    @media ${({ theme }) => theme.windowSize.md} {
      font-size: 20px;
      margin-bottom: 32px;
    }

    @media ${({ theme }) => theme.windowSize.sm} {
      font-size: 16px;
      margin-bottom: 24px;
    }
  }

  h3 {
    font-size: 20px;
    color: #aaa;
    margin-bottom: 10px;

    @media ${({ theme }) => theme.windowSize.md} {
      font-size: 16px;
      margin-bottom: 7px;
    }

    @media ${({ theme }) => theme.windowSize.sm} {
      font-size: 14px;
      margin-bottom: 4px;
    }
  }
`;

export const Wrapper = styled.div<{ $isFirst: boolean }>`
  margin-bottom: ${({ $isFirst }) => ($isFirst ? "40px" : "20px")};

  div {
    display: grid;
    grid-template-columns: repeat(2, 240px);
    grid-template-rows: repeat(2, 1fr);
    justify-content: center;
    gap: 20px;
    padding: 0 30px;

    @media ${({ theme }) => theme.windowSize.md} {
      padding: 0 20px;
      grid-template-columns: repeat(2, 180px);
    }

    @media ${({ theme }) => theme.windowSize.sm} {
      padding: 0 15px;
      grid-template-columns: repeat(2, 120px);
    }

    input {
      font-size: 18px;
      border: 1px solid #acacac;
      border-radius: 4px;
      padding: 5px 10px;

      @media ${({ theme }) => theme.windowSize.md} {
        font-size: 16px;
      }
    }
  }
`;
