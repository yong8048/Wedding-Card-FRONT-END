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

  .notice {
    font-size: 14px;
    color: #aaa;
    margin-bottom: 4px;

    @media ${({ theme }) => theme.windowSize.sm} {
      font-size: 12px;
    }
  }
`;

export const DatePickerContainer = styled.div`
  position: relative;
  margin: 0 auto 30px;

  .react-datepicker__input-container {
    input {
      font-family: "Pretendard";
      font-size: 20px;
      padding: 5px 10px;

      @media ${({ theme }) => theme.windowSize.md} {
        font-size: 16px;
      }
      &:focus {
        outline: none;
      }
    }
  }
  .react-datepicker__month-container {
    font-family: "Pretendard";
  }
`;

export const WeddingHoleContainer = styled.div`
  .WeddingHole-Input {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 auto 20px;
    gap: 10px;
    input {
      font-size: 18px;
      padding: 5px 10px;
      @media ${({ theme }) => theme.windowSize.md} {
        font-size: 16px;
      }
    }

    .WeddingHole-address {
      display: flex;
      gap: 20px;
      input {
        width: 100%;
      }
      button {
        white-space: nowrap;
        background-color: #567073;
        padding: 0 10px;
        border-radius: 4px;
        color: #ececec;
      }
    }
  }
`;

export const TrafficContainer = styled.div`
  h2 {
    font-size: 20px;
    color: #242424;
    font-weight: 600;
    margin: 40px 0 0;
  }
  div {
    font-size: 18px;
    @media ${({ theme }) => theme.windowSize.md} {
      font-size: 16px;
    }
    @media ${({ theme }) => theme.windowSize.sm} {
      font-size: 14px;
    }
    .Traffic-Input,
    .Etc-Input {
      width: 70%;
      margin: 0 auto;
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-bottom: 1px solid #dcdcdc;
      font-size: inherit;

      .Transportation {
        padding: 5px 10px;
        max-width: 150px;
        font-size: inherit;
      }
      textarea {
        height: 120px;
        resize: none;
        padding: 5px 10px;
        font-size: inherit;
      }
    }

    .Etc-Input {
      position: relative;

      #Close {
        position: absolute;
        top: 15px;
        right: 5px;
      }
    }

    #Add-Etc {
      white-space: nowrap;
      background-color: #567073;
      margin: 10px 0;
      padding: 10px 20px;
      border-radius: 4px;
      color: #ececec;
      font-size: inherit;
    }
  }
`;
