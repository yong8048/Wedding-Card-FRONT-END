import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  border-bottom: 1px solid #dcdcdc;
  padding: 40px 10px 20px;

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

export const ImageContainer = styled.div`
  position: relative;
  border: 1px solid #acacac;
  height: 300px;
  overflow-y: scroll;
  padding: 10px;

  .notice-Drag {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;

    p {
      font-weight: 600;
      word-break: keep-all;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;

    @media ${({ theme }) => theme.windowSize.md} {
      grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (max-width: 512px) {
      grid-template-columns: repeat(3, 1fr);
    }
    .image-Conatiner {
      background-color: #ececec;
      height: 150px;
      position: relative;

      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
      #Close {
        background-color: #dcdcdc;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
      }
      #Back {
        background-color: rgb(220, 220, 220, 0.8);
        position: absolute;
        bottom: 0;
        left: 0;
        cursor: pointer;
      }
      #Forward {
        background-color: rgb(220, 220, 220, 0.8);
        position: absolute;
        bottom: 0;
        right: 0;
        cursor: pointer;
      }
    }
  }

  &::-webkit-scrollbar {
    width: 6px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #567073; /* 스크롤바의 색상 */

    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1); /*스크롤바 뒷 배경 색상*/
  }
`;

export const UploadButton = styled.button`
  background-color: #567073;
  margin-top: 20px;
  max-width: 500px;
  padding: 10px;
  color: #ececec;
  border-radius: 4px;
  width: 100%;
`;
