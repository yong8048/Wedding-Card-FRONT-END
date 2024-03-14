import * as S from "./style";
import Header from "@/components/Search/Header";
import Recommend from "@/components/Search/Recommend";
const Search = () => {
  return (
    <S.SearchContainer>
      <Header />
      <Recommend />
    </S.SearchContainer>
  );
};

export default Search;
