import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  border-bottom: 1px solid #dcdcdc;
  padding: 20px 0;

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

export const ImageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 20px;

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    position: relative;
    background-color: #ede6eb;
    border: 1px solid #d2d2d2;

    img {
      max-width: 100%;
      max-height: 100%;
      outline: 0;
    }

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 22px;
      white-space: nowrap;
      color: #567073;
    }
    .background-video {
      position: absolute;
      mix-blend-mode: screen;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      video {
        width: 100%;
        height: 100%;
        opacity: 1;
        visibility: initial;
      }
    }
  }

  input {
    display: none;
  }

  button {
    background-color: #567073;
    margin-top: 20px;
    width: 500px;
    padding: 10px;
    color: #ececec;
    border-radius: 4px;
  }

  @media ${({ theme }) => theme.windowSize.md} {
    .img-container {
      width: 400px;
      height: 400px;
      span {
        font-size: 20px;
      }
    }

    button {
      width: 400px;
    }
  }

  @media ${({ theme }) => theme.windowSize.sm} {
    .img-container {
      width: 300px;
      height: 300px;
      span {
        font-size: 16px;
      }
    }
    button {
      width: 300px;
      font-size: 14px;
    }
  }
`;

export const EffectForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  z-index: 1000;
`;
