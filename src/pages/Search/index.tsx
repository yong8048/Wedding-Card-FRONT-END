import React from "react";
import * as S from "./style";
const Search = () => {
  return (
    <S.SearchSection>
      <div>
        <div>뒤로가기</div>
        <input type="text" placeholder="검색창" />
      </div>
    </S.SearchSection>
  );
};

export default Search;
