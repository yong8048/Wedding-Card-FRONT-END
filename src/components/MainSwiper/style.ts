import styled, { keyframes } from "styled-components";

// interface StyledProps {
//   animate: boolean;
// }

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const SwiperContainer = styled.div`
  position: relative;

  .swiper {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 450px;
    width: 100%;
    max-height: 100%;
    position: relative;
    overflow: hidden;
    z-index: 1;
    span {
      position: absolute;
      right: 60px;
      bottom: 25px;
      z-index: 10;
      padding: 5px 5px;
      font-size: 12px;
      color: #fff;
      border-radius: 7px;
      background-color: #777;
    }
  }
  .swiperslide {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 100%;
    position: relative;
  }
  .swiperImg {
  }
  .swiper-pagination {
  }
`;
export const SwiperImage = styled.img`
  max-width: 450px;
  width: 80%;
  object-fit: contain;
`;

export const SwiperImageTag = styled.p<{ animate: boolean }>`
  position: absolute;
  opacity: ${props => (props.animate ? "1" : "0")};
  transform: ${props => (props.animate ? "translateY(0%)" : "translateY(100%)")};
  /* animation: ${props => (props.animate ? slideUp : "none")} 1s ease-out both; */
  transition: all 1s ease-out;
  transition-delay: 0.4s;
  left: 45px;
  bottom: 30px;
  /* color: #000; */
  font-size: 30px;
  font-weight: 700;
`;
