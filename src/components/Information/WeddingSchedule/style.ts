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
        background-color: #e8e8e8;
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
    .Traffic-Input {
      width: 70%;
      margin: 0 auto;
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-bottom: 1px solid #dcdcdc;
      font-size: inherit;

      @media ${({ theme }) => theme.windowSize.md} {
        width: 80%;
      }
      @media ${({ theme }) => theme.windowSize.sm} {
        width: 90%;
      }

      .Transportation {
        padding: 5px 10px;
        font-size: inherit;
        display: flex;
        align-items: center;
        font-weight: 600;

        span {
          margin-left: 6px;
        }
      }

      #Etc-Input {
        font-size: inherit;
        margin-left: 6px;
        width: 120px;
        padding: 5px 10px;
      }
    }
  }
`;

export const TextEditor = styled.div`
  background-color: #ececec;
  padding: 10px;
  height: 30px;
  border-radius: 4px 4px 0 0;
  border: 1px solid #acacac;
  border-bottom: none;
  text-align: left;

  display: flex;

  button {
    padding: 4px 6px;
    &:hover {
      background-color: #dcdcdc;
    }

    svg {
      height: 22px;
    }
  }

  #BOLD {
    font-weight: 600;
  }

  #UNDERLINE {
    span {
      padding-bottom: 1px;
      box-shadow: inset 0 -1px 0 #000;
    }
  }
  #ITALIC {
    span {
      font-style: italic;
    }
  }

  #divider {
    width: 1px;
    background-color: #cccccc;
    height: 70%;
    margin: auto 6px;
  }
`;

export const EditorContainer = styled.div`
  font-family: "Pretendard";
  height: 150px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #acacac;
  border-radius: 0px 0px 4px 4px !important;
  margin-top: -10px;
`;
