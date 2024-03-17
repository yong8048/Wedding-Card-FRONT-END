import { CiBookmark } from "react-icons/ci";
import * as S from "./style";
import TemplateData from "@/constants/template.json";
import { useParams } from "react-router-dom";
// import { useState } from "react";

const TemplateList = ({ search = false }) => {
  const { word } = useParams();
  const clickItem = (title: string) => {
    console.log(title);
  };
  const clickLike = (index: number) => {
    console.log(index);
  };

  const filteredData = Object.entries(TemplateData).filter(([_, data]) => {
    if (!search || !word) return true;
    return data.tag.some(tag => tag.toLowerCase().includes(word.toLowerCase()));
  });

  return (
    <S.Container>
      <S.ItemsUl>
        {filteredData.map(([title, data], index) => (
          <S.ItemLi key={index} onClick={() => clickItem(title)}>
            <S.ItemImg>
              <img src={data.img} alt={title} />
              <CiBookmark
                size={25}
                onClick={e => {
                  e.stopPropagation();
                  clickLike(index);
                }}
              />
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
