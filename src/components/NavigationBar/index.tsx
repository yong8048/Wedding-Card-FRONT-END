import { getUserInfo } from "@/apis/kakao";
import * as S from "./style";
import { FcSearch } from "react-icons/fc";
import { FcTemplate } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_REST_API_KEY}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URL}&response_type=code`;

const NavigationBar = () => {
  const getIsLogined = () => {
    return false;
  };

  const handleGetUserInfo = async () => {
    const res = await getUserInfo();
    console.log(res);
  };

  return (
    <S.NavContainer>
      <div>
        <S.NavLinkEl to={"/"}>
          <img src="/logo.png" alt="logo" />
        </S.NavLinkEl>
      </div>
      <div onClick={handleGetUserInfo}>
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
        <S.NavLinkEl to={getIsLogined() ? "/mypage" : KAKAO_AUTH_URL}>
          <FcCollaboration size={25} />
          <span>MY</span>
        </S.NavLinkEl>
      </div>
    </S.NavContainer>
  );
};

export default NavigationBar;
