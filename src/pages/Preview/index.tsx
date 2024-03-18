import TemplateList from "@/components/Common/TemplateList";
import TemplateData from "@/constants/TemplateData.json";
import * as S from "./style";

const Preview = () => {
  return (
    <S.Container>
      <S.ItemsUl>
        {Object.entries(TemplateData).map(([title, data], index) => (
          <TemplateList key={index} item={{ title, data, index }} />
        ))}
      </S.ItemsUl>
    </S.Container>
  );
};

export default Preview;
