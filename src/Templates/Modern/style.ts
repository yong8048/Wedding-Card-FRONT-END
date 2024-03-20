import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Page1Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0 7rem;
  img {
    width: 80%;
  }
`;
export const Page1Date = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 80%;
  padding-left: 10px;
  margin-left: 10px;
  margin: 30px 0;
  border-left: 2px solid black;
  font-size: 1rem;
  p span {
    display: block;
    margin: 5px 0;
    text-align: center;
  }
`;
export const Page1Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 80%;
  margin: 10px 0;

  h1 {
    font-size: x-large;
    margin-bottom: 15px;
  }
`;

export const Page2Div = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #999;
  h1 {
    margin: 1.5rem 0;
  }
`;
export const Page2Text = styled.div`
  text-align: center;
`;
export const Page2Name = styled.div`
  margin: 6rem 0 3rem 0;

  span {
    font-size: 0.6rem;
  }
`;

export const Page3Div = styled.div`
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

export const Page4Div = styled.div`
  margin-top: 50px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;

    button {
      &:nth-child(2) {
        background-color: #7e7;
      }
    }
  }
  button {
    background-color: #78c0e9;
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
`;

export const Page5Div = styled.div`
  width: 100%;
  p {
    width: 100%;
    height: 40px;
    background-color: #f4f4f4;
    text-align: center;
    line-height: 40px;
    margin-bottom: 2rem;
  }
`;

export const Page5Data = styled.div`
  display: flex;
  justify-content: space-evenly;
  svg {
    width: 20px;
    height: 20px;
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
          background-color: #78c0e9;
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
    button {
      &:nth-child(1) {
        background-color: #7e7;
      }
    }
  }
`;

export const Page6CalendarWrapper = styled.div`
  padding: 80px 0;
  background-color: #f6f5f5;
  margin: 20px 0;

  .date {
    color: #524548;
    display: flex;
    justify-content: space-between;
    margin: 0 20px;

    .yymmdd {
      font-family: "CrimsonPro", serif;
      font-size: 24px;
      letter-spacing: 3px;
    }
    .ddhhmm {
      font-family: "GowunDodum", serif;
      font-size: 16px;
      line-height: 24px;
    }
  }
  .calendar {
    .react-calendar {
      text-align: center;
      margin: 5px auto 30px auto;
      padding: 20px 0;
      border: 1px solid #e8dfdf;
      border-left: none;
      border-right: none;
      background-color: transparent;
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
      .saturday {
        color: inherit;
      }
      .react-calendar__month-view__weekdays abbr[title="일요일"] {
        color: red;
      }
      .react-calendar__month-view__days__day--neighboringMonth {
        visibility: hidden;
      }
      .react-calendar__month-view__days {
        height: 300px;
      }
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

export const Page7Photo = styled.div`
  width: 80%;
  /* height: 400px; */
  border-top: 2px solid #ccc;

  p {
    text-align: center;
    line-height: 30px;
    margin-bottom: 50px;
  }
  .swiper {
    width: 100%;
    margin-bottom: 10px;
  }
  .swiper-slide {
    width: 343px;
    height: 343px;
    text-align: center;
  }
`;
export const SwiperBottom = styled.div`
  width: 90%;
  margin-bottom: 100px;

  .swiper-bottom {
    width: 100%;
  }
  .swiper-bottom-slide {
    text-align: center;
    height: 65px;

    img {
      width: 65px;
      height: 65px;
    }
  }
`;
