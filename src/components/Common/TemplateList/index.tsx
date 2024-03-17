import { CiBookmark } from "react-icons/ci";
import * as S from "./style";

interface TemplateListItem {
  title: string;
  data: {
    img: string;
    tag: string[];
  };
  index: number;
}

interface TemplateListProps {
  item: TemplateListItem;
}

const TemplateList = ({ item }: TemplateListProps) => {
  const clickLike = (index: number) => {
    console.log(index);
  };

  return (
    <S.ItemLi>
      <S.ItemImg>
        <img src={item.data.img} alt={item.title} />
        <CiBookmark
          size={25}
          onClick={e => {
            e.stopPropagation();
            clickLike(item.index);
          }}
        />
      </S.ItemImg>
      <S.ItemInfo>
        <span>{item.title}</span>
      </S.ItemInfo>
    </S.ItemLi>
  );
};

export default TemplateList;
