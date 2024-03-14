import * as S from "./style";
import { CiSearch } from "react-icons/ci";

const SearchContainer = () => {
  return (
    <S.SearchContainer>
      <CiSearch />
      <input type="text" />
    </S.SearchContainer>
  );
};

export default SearchContainer;
