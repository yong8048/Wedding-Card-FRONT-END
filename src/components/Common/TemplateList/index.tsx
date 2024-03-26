import { IoBookmark } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import * as S from "./style";
import { useState } from "react";

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
  const [isBookmark, setIsBookmark] = useState(false);

  const clickLike = (index: number) => {
    console.log(index);
  };

  return (
    <S.ItemLi>
      <S.ItemImg>
        <img src={item.data.img} alt={item.title} />
        {isBookmark ? (
          <IoBookmark
            size={25}
            onClick={e => {
              e.stopPropagation();
              clickLike(item.index);
            }}
            color="#03c75a"
          />
        ) : (
          <IoBookmarkOutline
            size={25}
            onClick={e => {
              e.stopPropagation();
              clickLike(item.index);
            }}
          />
        )}
      </S.ItemImg>
      <S.ItemInfo>
        <span>{item.title}</span>
      </S.ItemInfo>
    </S.ItemLi>
  );
};

export default TemplateList;
