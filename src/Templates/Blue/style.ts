import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
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
  }
`;
export const Page3Title = styled.div`
  width: 100%;
  font-size: x-large;

  h1 {
    padding-left: 20px;
  }
  div {
    margin: 50px 0;
    text-align: center;
    font-size: large;
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
    background-color: #fafafa;
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
