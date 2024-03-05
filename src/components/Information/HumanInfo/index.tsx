import * as S from "./style";

const HumanInfo = () => {
  return (
    <S.Container>
      {["신랑", "신부"].map((value, index) => (
        <S.Wrapper key={index} $isFirst={value === "신랑"}>
          <h1>
            {value} 및 {value}측 혼주 정보를 작성해주세요.
          </h1>
          {/* <h3>반드시 반드시 반드시 설명 설명 설명</h3> */}
          <div>
            <input placeholder={`${value} 부`} />
            <input placeholder={`${value} 모`} />
            <input placeholder="관계" />
            <input placeholder="본인" />
          </div>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default HumanInfo;
