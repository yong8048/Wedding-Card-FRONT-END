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

  .textarea {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    textarea {
      font-family: "Pretendard";
      resize: none;
      width: 80%;
      height: 150px;
      padding: 10px;
      font-size: 18px;
      border: 1px solid #acacac;
      border-radius: 4px;

      @media ${({ theme }) => theme.windowSize.md} {
        font-size: 14px;
        margin-bottom: 32px;
      }

      &:focus {
        outline: none;
      }
    }
  }
`;
