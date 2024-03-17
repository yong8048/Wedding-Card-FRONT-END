import { CiBookmark } from "react-icons/ci";

import * as S from "./style";
import templateData from "@/constants/template.json";
import { useParams } from "react-router-dom";
// import { useState } from "react";

const TemplateList = ({ search = false }) => {
  const { word } = useParams();
  const clickItem = () => {};
  const clickLike = (index: number) => {
    console.log(index);
  };

  if (search) {
    console.log("asd");
    console.log(word);
  }

  console.log(Object.entries(templateData));

  // 검색어에 따라 templateData를 필터링하는 함수
  const filteredData = Object.entries(templateData).filter(([_, data]) => {
    if (!search || !word) return true; // 검색 모드가 아니거나 검색어가 없다면 모든 데이터 반환
    return data.tag.some(tag => tag.toLowerCase().includes(word.toLowerCase())); // 대소문자 구분 없이 검색
  });
  console.log(filteredData);

  return (
    <S.Container>
      <S.ItemsUl>
        {filteredData.map(([title, data], index) => (
          <S.ItemLi key={index}>
            <S.ItemImg onClick={clickItem}>
              <img src={data.img} alt="이미지" />
              <CiBookmark size={25} onClick={() => clickLike(index)} />
            </S.ItemImg>
            <S.ItemInfo>
              <span>{title}</span>
            </S.ItemInfo>
          </S.ItemLi>
        ))}
      </S.ItemsUl>
    </S.Container>
  );
};

export default TemplateList;
