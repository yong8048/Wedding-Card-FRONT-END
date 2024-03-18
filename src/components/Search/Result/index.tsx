import TemplateList from "@/components/Common/TemplateList";
import * as S from "./style";
import { useParams } from "react-router-dom";
import TemplateData from "@/constants/TemplateData.json";

const Result = () => {
  const { word } = useParams();

  // const clickItem = (title: string) => {
  //   console.log(title);
  // };

  const filteredData = Object.entries(TemplateData).filter(([_, data]) => {
    console.log(_);

    if (!word) return true;
    return data.tag.some(tag => tag.toLowerCase().includes(word.toLowerCase()));
  });

  return (
    <S.Container>
      <div>
        <h1>" {word} "</h1>
        <p>검색한 결과 입니다.</p>
      </div>
      <S.ItemsUl>
        {filteredData.map(([title, data], index) => (
          <TemplateList key={index} item={{ title, data, index }} />
        ))}
      </S.ItemsUl>
    </S.Container>
  );
};

export default Result;
