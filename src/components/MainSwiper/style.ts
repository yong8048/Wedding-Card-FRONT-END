import styled from "styled-components";

export const SwiperContainer = styled.div`
  .swiper {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    max-height: 100%;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  .swiperslide {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 100%;
  }
  .imgT {
    width: 100%;
    object-fit: contain;
  }
  .swiper-pagination {
  }
`;
