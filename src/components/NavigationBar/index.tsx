import * as S from "./style";
import { FcSearch } from "react-icons/fc";
import { FcTemplate } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";

const NavigationBar = () => {
  return (
    <S.NavContainer>
      <div>
        <S.NavLinkEl to={"/"}>
          <img src="/logo.png" alt="logo" />
        </S.NavLinkEl>
      </div>
      <div>
        <S.SearchButton>
          <FcSearch size={25} />
          <span>검색</span>
        </S.SearchButton>
      </div>
      <div>
        <S.NavLinkEl to={"/preview"}>
          <FcTemplate size={30} />
          <span>템플릿</span>
        </S.NavLinkEl>
      </div>
      <div>
        <S.NavLinkEl to={"/mypage"}>
          <FcCollaboration size={25} />
          <span>MY</span>
        </S.NavLinkEl>
      </div>
    </S.NavContainer>
  );
};

export default NavigationBar;
