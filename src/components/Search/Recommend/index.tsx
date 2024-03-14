import { useEffect, useState } from "react";
import * as S from "./style";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const testWords = ["편안한", "색감있는", "심플", "흑백", "모던", "화려한"];
const Recommend = () => {
  const [recentlyWords, setRecentWords] = useState<string[]>([""]);
  const [recommendWords, setRecommendWords] = useState([""]);
  const navigate = useNavigate();
  useEffect(() => {
    setRecommendWords(testWords);

    const savedSearch = localStorage.getItem("searchData");
    if (savedSearch) {
      setRecentWords(JSON.parse(savedSearch));
    }
  }, []);

  const clickRecommendRemove = (index: number) => {
    const updatedStorageData = [...recentlyWords].reverse().filter((_, idx) => idx !== index);
    setRecentWords(updatedStorageData);

    localStorage.setItem("searchData", JSON.stringify(updatedStorageData));
  };

  const clickRecommendWords = (word: string) => {
    console.log(word);
    navigate(`/search/${word}`);
  };

  return (
    <S.Container>
      <S.RecentlyWord>
        <p>최근 검색어</p>
        <S.RecentlyUl>
          {[...recentlyWords].reverse().map((word, index) => (
            <li key={index}>
              <span onClick={() => clickRecommendWords(word)}>{word}</span>
              <IoClose size={20} onClick={() => clickRecommendRemove(index)} />
            </li>
          ))}
        </S.RecentlyUl>
      </S.RecentlyWord>
      <S.RecommendWord>
        <p>추천 검색어</p>
        <S.RecommendUl>
          {recommendWords.map((word, index) => (
            <li key={index} onClick={() => clickRecommendWords(word)}>
              {word}
            </li>
          ))}
        </S.RecommendUl>
      </S.RecommendWord>
    </S.Container>
  );
};

export default Recommend;
