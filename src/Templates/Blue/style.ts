import styled, { keyframes } from "styled-components";
import { SwiperSlide } from "swiper/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-family: "IropkeBatangM";
  .observer {
    &.visible {
      animation: ${fadeIn} 1.5s ease-out forwards;
    }
    opacity: 0;
  }
`;

export const Page1Title = styled.div`
  position: relative;
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #8fb1c9;
  color: ${({ theme }) => theme.color.primary_light};

  .date {
    width: 75%;
    font-size: 40px;
    margin: 10px 0;
    p {
      &:nth-child(2) {
        text-align: end;
      }
    }
  }
  .name {
    line-height: 25px;
    margin-bottom: 10px;
  }
`;

export const Line = styled.div`
  position: absolute;
  left: 5%;
  top: 32%;
  width: 90%;
  height: 1px;
  rotate: -45deg;
  background-color: ${({ theme }) => theme.color.primary_light};
`;

export const Page2Main = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #8fb1c9;
  img {
    width: 100%;
  }
  div {
    text-align: center;
    margin: 50px 0;
    line-height: 30px;
    font-size: 18px;
  }
`;
export const Page3Title = styled.div`
  width: 100%;
  font-size: x-large;

  h1 {
    padding-left: 20px;
    color: #8fb1c9;
    font-weight: 600;
  }
  div {
    margin: 50px 0;
    text-align: center;
    font-size: 16px;
    line-height: 25px;
  }
  p {
    margin: 1.5rem 0;
  }
`;

export const Page4Name = styled.div`
  margin: 6rem 0 3rem 0;
  text-align: center;

  span {
    font-size: 0.6rem;
  }
`;
export const Page5Img = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  background-image: url("/banner_01.jpg");
  background-size: 100% auto;
  p {
    color: #fff;
  }
`;

export const Page6Call = styled.div`
  margin-top: 50px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
  }
  button {
    border-radius: 50%;
    padding: 10px;
    border: none;
    width: 40px;
    height: 40px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  .call {
    background-color: #7e7;
  }
  .message {
    background-color: #78c0e9;
  }
`;

export const Page7Div = styled.div`
  width: 100%;
  p {
    width: 100%;
    height: 40px;
    background-color: #f3f8fb;
    text-align: center;
    line-height: 40px;
    margin-bottom: 2rem;
  }
`;
export const Page7Data = styled.div`
  display: flex;
  justify-content: space-evenly;
  svg {
    width: 20px;
    height: 20px;
  }
  .call {
    background-color: #7e7;
  }
  .message {
    background-color: #78c0e9;
  }
  div {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 30px;

    &:first-child h1 {
      color: #99f; /* 파란색 */
    }

    &:last-child h1 {
      color: #e8e; /* 초록색 */
    }

    div {
      width: 100%;

      span {
        span {
          &:nth-child(1) {
            font-size: 13px;
          }
          &:nth-child(2) {
            font-weight: bold;
            margin-left: 3px;
          }
        }
      }
      div {
        display: flex;
        flex-direction: row;
        justify-content: center;

        button {
          border-radius: 50%;
          padding: 10px;
          border: none;
          width: 40px;
          height: 40px;

          svg {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
`;

export const Page8CalendarWrapper = styled.div`
  padding: 80px 20px;
  background-color: #f3f8fb;
  margin: 20px 0;

  .d-day {
    text-align: center;
  }
  .date {
    color: #524548;
    display: flex;
    justify-content: space-between;
    margin: 0 5px;

    .yymmdd {
      font-family: "CrimsonPro", serif;
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 2px;
      color: #89cdcc;
    }
    .ddhhmm {
      font-family: "GowunDodum", serif;
      font-size: 16px;
      line-height: 24px;
      font-weight: 600;
      color: #89cdcc;
    }
  }
  .calendar {
    .react-calendar {
      text-align: center;
      margin: 5px auto 30px auto;
      padding: 20px 0;
      border: 1px solid #8fb1c9;
      border-left: none;
      border-right: none;
      background-color: #fafafa;
      abbr {
        font-weight: 400;
        font-size: 16px;
        font-family: "GowunDodum", serif;
        text-decoration: none;
      }

      .react-calendar__navigation {
        display: none;
      }
      .react-calendar__tile {
        pointer-events: none;
        padding: 10px;
      }
      .react-calendar__tile--active {
        background-color: #cec3c3;
        border-radius: 100%;
        abbr {
          color: white;
        }
      }
      .react-calendar__month-view__weekdays__weekday--weekend {
        color: blue;
      }
      .saturday {
        color: blue;
      }
      .react-calendar__month-view__weekdays abbr[title="일요일"] {
        color: red;
      }
      .react-calendar__month-view__days__day--neighboringMonth {
        visibility: hidden;
      }
      .react-calendar__month-view__days {
        height: 250px;
      }
    }
    .react-calendar__month-view__days__day--weekend {
      color: red;
    }
  }

  .d-day {
    font-size: 16px;
    font-family: "GowunDodum", serif;

    span {
      color: #ea7664;
    }
  }
`;

export const Page9Photo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SwiperTop = styled.div`
  width: 100%;

  p {
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    line-height: 30px;
    padding: 20px 0 20px 20px;
    color: #8fb1c9;
    font-size: x-large;
    font-weight: 600;
  }
  .swiper {
    width: 80%;
    margin-bottom: 10px;
  }
  .swiper-slide {
    width: 343px;
    height: 343px;
    text-align: center;
    cursor: pointer;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;
export const SwiperBottom = styled.div`
  width: 90%;
  margin-bottom: 100px;

  .swiper-bottom {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .swiper-bottom-slide {
    text-align: center;
    height: 65px;
    display: flex;
    cursor: pointer;
    img {
      width: 65px;
      height: 65px;
      color: #aaa;
    }
  }
`;
export const SwiperSlideComponent = styled(SwiperSlide)<{ $opacity: boolean }>`
  filter: ${({ $opacity }) => ($opacity ? "brightness(100%)" : "brightness(50%)")};
`;

export const Page10YouTube = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    width: 90%;
    margin: 20px 0;
    color: #8fb1c9;
    font-size: 24px;
    font-weight: 600;
  }
  div {
    width: 100%;
    margin: 0 auto;
    background-color: #f3f8fb;
  }
  .youtube {
    width: 90%;
    margin: 30px auto;
  }
  img {
    width: 30%;
    margin: 50px 0;
  }
`;

export const Page11Live = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  p {
    line-height: 25px;
    font-weight: 600;
  }
  button {
    background-color: #8fb1c9;
    color: #fff;
    width: 200px;
    height: 50px;
    border-radius: 20px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    width: 90%;
    margin: 20px 0;
    color: #8fb1c9;
    font-size: 24px;
  }
  .wedding-date {
    margin: 50px 0;
    color: #8fb1c9;
  }
`;

export const Page12Map = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0 20px 0;

  .title {
    width: 90%;
    margin: 20px 0;
    color: #8fb1c9;
    font-size: 24px;
    font-weight: 600;
  }

  .address {
    width: 100%;
    padding: 10px 20px;
    position: relative;
    box-sizing: border-box;
    background-color: #f3f8fb;

    h1 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    p {
      color: #aaa;
    }
  }
  .roadmap {
    width: 100%;
    background-color: #f3f8fb;
    .map-container {
      width: 90%;
    }
  }
  .roadmap-nav {
    background-color: #f3f8fb;
    width: 100%;
    height: 42px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;

    div {
      width: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      cursor: pointer;
      border-right: 1px solid rgba(97, 80, 67, 0.2);

      &:last-child {
        border: none;
      }

      img {
        width: 16px;
      }
    }
  }
`;

export const Page13Way = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 80px;
  div {
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding: 20px;
    box-sizing: border-box;

    .title {
      width: 90%;
      margin: 20px 0;
      color: #8fb1c9;
      font-size: 24px;
    }
    .info {
      color: #999;
    }
  }
`;

export const Page14Account = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .title {
    width: 90%;
    margin: 20px 0;
    color: #8fb1c9;
    font-size: 24px;
    font-weight: 600;
  }
  .text {
    margin-bottom: 50px;
  }
  div {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;

    p {
      line-height: 50px;
    }

    button {
      width: 150px;
      height: 40px;
      font-size: 14px;
      border-radius: 20px;
      background-color: #8fb1c9;
      color: #fff;
    }
  }
`;
export const AccountModal = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 450px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  z-index: 10;
  box-sizing: border-box;

  p {
    color: #8fb1c9;
  }
  div {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;
    position: relative;
    background-color: #f3f8fb;
    .close {
      position: absolute;
      right: 0;
      top: 7px;
      width: 40px;
      height: 40px;
      z-index: 2;
      cursor: pointer;
      path {
        width: 40px;
        height: 40px;
      }
    }
    div {
      display: flex;
      flex-direction: column;

      div {
        display: flex;
        width: 80%;
        height: 30px;
        flex-direction: row;
        justify-content: space-between;

        input {
          width: 80%;
          border-radius: 0px;
          border-right: none;
          height: 25px;
          border: 1px solid #8fb1c9;
        }
        button {
          width: 20%;
          height: 29px;
          color: #fafafa;
          background-color: #8fb1c9;
        }
      }
    }
  }
`;

export const Page15Message = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  box-sizing: border-box;
  .title {
    width: 90%;
    margin: 20px 0;
    color: #8fb1c9;
    font-size: 24px;
    font-weight: 600;
  }
  .write {
    padding: 30px 10px 50px 10px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f3f8fb;

    p {
      height: 50px;
    }

    input {
      width: 47%;
      height: 35px;
      padding-left: 5px;
    }
    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 5px;
    }
    textarea {
      width: 100%;
      height: 100px;
      min-height: 50px;
      max-height: 150px;
      padding: 0px;
      resize: vertical;
      padding: 5px;
      box-sizing: border-box;
    }
  }
  button {
    width: 90%;
    background-color: #8fb1c9;
    color: #fafafa;
    margin-top: 30px;
    height: 35px;
    border-radius: 5px;
  }
  .guestbook-wrapper {
    width: 90%;
    border-bottom: 1px solid #ccc;
    padding: 15px 0;
    position: relative;
    div {
      display: flex;

      h2 {
        font-weight: 700;
        line-height: 30px;
        margin-right: 10px;
      }
      span {
        font-size: small;
        line-height: 30px;
      }
    }
    p {
      width: 80%;
    }
    .close {
      position: absolute;
      top: 23px;
      right: 0;
      width: 30px;
      height: 30px;
      background-color: #333;
      border-radius: 5px;
      cursor: pointer;
      svg {
        width: 30px;
        height: 30px;
        color: white;
      }
    }
  }
  .pagination {
    margin: 20px 0;
  }
`;
export const Page16Share = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    width: 90%;
    margin: 20px 0;
    color: #8fb1c9;
    font-size: 24px;
    font-weight: 600;
  }
  div {
    display: flex;
    margin: 10px;
    div {
      display: flex;
      gap: 5px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
  .wrapper {
    cursor: pointer;
  }
  .copyright {
    color: #ccc;
    margin: 20px 0;
  }
`;
export const GuestBookPaginationSpan = styled.span<{ $isActiveIndex: boolean }>`
  display: inline-block;
  text-align: center;
  width: 30px;
  cursor: pointer;
  color: #89757a;
  opacity: ${({ $isActiveIndex }) => ($isActiveIndex ? 1 : 0.35)};
  font-weight: ${({ $isActiveIndex }) => ($isActiveIndex ? "600" : "400")};
`;
