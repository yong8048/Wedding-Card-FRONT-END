import { CiBookmark } from "react-icons/ci";

import * as S from "./style";
const test = ["모던웨딩", "시작", "웨딩러브", "폴인러브", "러블리웨딩", "스몰웨딩"];
const testimg = ["/img1.png", "/img2.png", "/img3.png", "/img4.png", "/img1.png", "/img2.png"];

const TemplateList = () => {
  const clickItem = () => {};
  const clickLike = (index: number) => {};
  return (
    <S.Container>
      <S.ItemsUl>
        {test.map((data, index) => (
          <S.ItemLi key={index}>
            <S.ItemImg onClick={clickItem}>
              <img src={testimg[index]} alt="이미지" />
              <CiBookmark size={25} onClick={() => clickLike(index)} />
            </S.ItemImg>
            <S.ItemInfo>
              <span>{data}</span>
            </S.ItemInfo>
          </S.ItemLi>
        ))}
      </S.ItemsUl>
    </S.Container>
  );
};

export default TemplateList;
