import TemplateList from "@/components/Common/TemplateList";
import * as S from "./style";
import { useParams } from "react-router-dom";
const Result = () => {
  const { word } = useParams();
  return (
    <S.Container>
      <div>
        <h1>" {word} "</h1>
        <p>검색한 결과 입니다.</p>
      </div>
      <TemplateList search={true} />
    </S.Container>
  );
};

export default Result;
