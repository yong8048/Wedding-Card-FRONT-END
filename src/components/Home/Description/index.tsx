import * as S from "./style";

const Description = () => {
  return (
    <S.Container>
      <S.DescriptionWrapper>
        <div>
          <div>
            <p>5종의 청첩장</p>
            <p>모든 모바일 청첩장을 무료로!</p>
          </div>
          <img src="/poster-1.jpg" alt="poster-1" />
        </div>
        <div>
          <div>
            <p>정보만 입력하고</p>
            <p>모든 청첩장에 바로</p>
            <p>적용 해보세요!</p>
          </div>
          <img src="poster-2.jpg" alt="poster-2" />
        </div>
        <div>
          <div>
            <p>결혼식이 끝나고 30일간</p>
            <p>사라지지 않고 유지됩니다!</p>
          </div>
          <img src="poster-3.jpg" alt="poster-3" />
        </div>
      </S.DescriptionWrapper>
      <S.CreateLink to={"/servey"}>청첩장 만들기</S.CreateLink>
    </S.Container>
  );
};

export default Description;
