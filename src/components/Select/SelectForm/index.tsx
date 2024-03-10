import * as S from "./style";
const test = ["모던웨딩", "시작", "웨딩러브", "폴인러브", "러블리웨딩", "스몰웨딩"];
const testimg = ["/img1.png", "/img2.png", "/img3.png", "/img4.png", "/img1.png", "/img2.png"];
const SelectForm = () => {
  const clickItem = () => {};
  return (
    <S.SelectFormContainer>
      {test.map((data, index) => (
        <S.SelectFormItems key={index}>
          <div onClick={clickItem}>
            <img src={testimg[index]} alt="이미지" />
          </div>
          <S.SelectFormItemInfo>
            <span>{data}</span>
            <button>ㅁ</button>
          </S.SelectFormItemInfo>
        </S.SelectFormItems>
      ))}
    </S.SelectFormContainer>
  );
};

export default SelectForm;
