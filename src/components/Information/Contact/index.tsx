import * as S from "./style";

const Contact = () => {
  return (
    <S.Container>
      {["신랑", "신부"].map((value, index) => (
        <S.Wrapper key={index} $isFirst={value === "신랑"}>
          <h1>{value} 및 혼주의 연락받을 연락처를 작성해주세요.</h1>
          <h3>' - '를 제외하고 입력해주세요.</h3>
          <div>
            <input placeholder={`${value} 전화번호`} />
            <input placeholder={`${value} 부 전화번호`} />
            <input placeholder={`${value} 모 전화번호`} />
          </div>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default Contact;
