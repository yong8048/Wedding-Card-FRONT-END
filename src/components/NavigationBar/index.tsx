import * as S from "./style";
import { FcSearch } from "react-icons/fc";
import { FcTemplate } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { LoginState } from "@/stores/LoginStateStore";

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_REST_API_KEY}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URL}&response_type=code`;

const NavigationBar = () => {
  const [searchState, setSearchState] = useState(false);
  const isLogined = useRecoilValue(LoginState);

  console.log(isLogined);

  const clickSearch = () => {
    setSearchState(!searchState);
  };

  return (
    <S.NavContainer>
      <div>
        <S.NavLinkEl to={"/"}>
          <img src="/logo.png" alt="logo" />
        </S.NavLinkEl>
      </div>
      <div onClick={clickSearch}>
        <S.NavLinkEl to={"/search"}>
          <FcSearch size={25} />
          <span>검색</span>
        </S.NavLinkEl>
      </div>
      <div>
        <S.NavLinkEl to={"/preview"}>
          <FcTemplate size={30} />
          <span>템플릿</span>
        </S.NavLinkEl>
      </div>
      <div>
        <S.NavLinkEl to={isLogined ? "/mypage" : KAKAO_AUTH_URL}>
          <FcCollaboration size={25} />
          <span>MY</span>
        </S.NavLinkEl>
      </div>
    </S.NavContainer>
  );
};

export default NavigationBar;
