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
    margin-bottom: 16px;

    @media ${({ theme }) => theme.windowSize.md} {
      font-size: 16px;
      margin-bottom: 10px;
    }

    @media ${({ theme }) => theme.windowSize.sm} {
      font-size: 14px;
      margin-bottom: 8px;
    }
  }
  .youtube-container {
    margin-top: 20px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 20px;

  .radio-container {
    margin-bottom: 10px;
    label {
      span {
        margin-left: 5px;
      }
    }
  }

  .input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 0 auto;
    font-size: 20px;
    width: 70%;

    @media ${({ theme }) => theme.windowSize.md} {
      font-size: 16px;
      width: 80%;
    }
    @media ${({ theme }) => theme.windowSize.sm} {
      font-size: 14px;
      width: 90%;
    }
    span {
      white-space: nowrap;
    }
    input {
      font-size: 18px;
      width: 100%;
      padding: 5px;
      @media ${({ theme }) => theme.windowSize.md} {
        font-size: 14px;
      }
      @media ${({ theme }) => theme.windowSize.sm} {
        font-size: 12px;
      }
    }
    button {
      white-space: nowrap;
      background-color: #567073;
      padding: 6px 10px;
      color: #ececec;
      border-radius: 4px;
      font-size: 18px;
      @media ${({ theme }) => theme.windowSize.md} {
        font-size: 14px;
      }
      @media ${({ theme }) => theme.windowSize.sm} {
        font-size: 12px;
      }
    }
  }
`;
