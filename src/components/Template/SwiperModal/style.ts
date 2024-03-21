import styled from "styled-components";

export const SwiperModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.7);
  animation: fadeIn 300ms ease-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    max-width: 400px;
    width: 100%;
    border-radius: 4px;
    height: 600px;
    .swiper {
      .swiper-wrapper {
        align-items: center;
        .swiper-slide {
          display: inline-block;
          vertical-align: middle;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
    .tools {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 6px;
      margin-top: 16px;
      div {
        width: 40px;
        height: 40px;
        background-color: #000;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }
`;
