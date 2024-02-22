import styled from "styled-components";

export const SwiperContainer = styled.div`
  .swiper {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    max-height: 800px;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  .swiperslide {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  .imgT {
    max-width: 430px;
  }
  .swiper-pagination {
  }
`;
