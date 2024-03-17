import * as S from "./style";
import Header from "@/components/Search/Header";
import Recommend from "@/components/Search/Recommend";
import Result from "@/components/Search/Result";
import { useParams } from "react-router-dom";

const Search = () => {
  const { word } = useParams();

  return (
    <S.SearchContainer>
      <Header />
      {word ? <Result /> : <Recommend />}
    </S.SearchContainer>
  );
};

export default Search;
