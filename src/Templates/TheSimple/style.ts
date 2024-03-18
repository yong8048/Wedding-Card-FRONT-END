import styled from "styled-components";

export const Container = styled.div`
  font-size: 0.9rem;
  text-align: center;
  position: relative;

  background-color: #fbfbfb;
`;

export const AudioWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;

  .audio-image {
    cursor: pointer;
  }
`;

export const MainWrapper = styled.div`
  font-family: "CrimsonPro";
  padding: 40px 0;

  .date {
    color: #242424;
    line-height: 20px;
    .date-yymmdd {
      font-size: 30px;
      margin-bottom: 10px;
      span {
        display: inline-block;
        padding: 0 8px 0.1rem;
        border-right: 1px solid;
        line-height: 20px;
        text-align: center;

        &:last-child {
          border: none;
        }
      }
    }
    .date-day {
      span {
        letter-spacing: 2px;
        font-size: 16px;
      }
    }
  }

  .main-image {
    padding: 20px;
    img {
      width: 100%;
      height: min-content;
    }
  }

  .wedding-info {
    font-family: "GowunDodum", serif;
    margin: 10px 0;
    font-weight: 600;
    color: #544f4f;

    .wedding-info-name {
      display: flex;
      justify-content: center;
      gap: 16px;
      font-size: 20px;
      margin-bottom: 30px;
      color: #242424;
      #divider {
        width: 1px;
        height: 20px;
        background-color: #242424;
      }
    }

    .wedding-info-date {
      font-size: 18px;
      margin-bottom: 16px;
    }
    .wedding-info-hall {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
`;

export const GreetingWrapper = styled.div`
  padding: 40px 0;

  img {
    width: 25px;
    margin-bottom: 20px;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    font-size: 18px;
    font-family: "GowunDodum", serif;
    color: #544f4f;
    /* font-weight: 600; */
  }
`;

export const HumanWrapper = styled.div`
  padding: 40px 0;
  font-family: "GowunDodum", serif;

  .humanInfo {
    font-size: 20px;
    margin-bottom: 20px;
    color: #242424;

    .dot {
      display: inline-block;
      width: 20px;
    }
    .relation {
      font-size: 16px;
      margin: 0 6px;
      color: #8a857f;
    }
  }

  .contact-button {
    font-family: "GowunDodum", serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto 0;
    border: 1px solid #cec3c3;
    padding: 10px 80px;
    border-radius: 32px;

    svg {
      margin-right: 10px;
    }
  }
`;

export const ContactModalContainer = styled.div`
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
    transform: translate(-50%, -50%);
    width: 320px;
    background-color: white;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      padding: 20px 0;
      background-color: #f6f5f5;
      .eng {
        font-family: "CrimsonPro";
        letter-spacing: 3px;
        color: #c2b2b2;
      }
      .kor {
        font-family: "GowunDodum", serif;
        font-size: 20px;
        color: #89757a;
      }
    }

    .info {
      font-size: 18px;
      .human {
        padding: 16px 0;
        color: #242424;
        .grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          grid-template-rows: 40px;
          align-items: center;
          .icons {
            display: flex;
            justify-content: space-evenly;
          }
        }
      }
      .husband {
        .who {
          color: #6473aa;
        }
      }
      .wife {
        .who {
          color: #ce7373;
        }
      }
    }
  }
`;
