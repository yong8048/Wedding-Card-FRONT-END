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
`;

export const Wrapper = styled.div`
  #check-box {
    display: grid;
    grid-template-columns: repeat(3, minmax(110px, 150px));
    grid-template-rows: repeat(2, 30px);
    justify-content: center;
    justify-items: center;
    align-items: center;
    margin: 20px 0;

    label {
      max-width: 150px;
      width: fit-content;

      input[type="checkbox"] {
        transform: scale(1.5);
        margin-right: 8px;

        @media ${({ theme }) => theme.windowSize.sm} {
          transform: scale(1.2);
        }

        &:focus {
          outline: none;
        }
      }
      span {
        font-size: 20px;
        @media ${({ theme }) => theme.windowSize.sm} {
          font-size: 16px;
        }
      }
    }
  }

  #input-area {
    .input-area-box {
      margin-top: 15px;

      h2 {
        font-weight: 600;
        color: #242424;
      }

      .account-inputs {
        margin-top: 8px;
        display: flex;
        justify-content: center;
        gap: 16px;

        @media ${({ theme }) => theme.windowSize.md} {
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .bank {
          width: 140px;
          @media ${({ theme }) => theme.windowSize.md} {
            width: auto;
          }
        }
      }

      input {
        font-size: 18px;
        padding: 5px 10px;
        border: 1px solid #acacac;
        border-radius: 4px;
      }
    }
  }
`;
