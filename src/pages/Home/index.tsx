import MainSwiper from "@/components/Home/MainSwiper";
import * as S from "./style";
import { userLogout } from "@/apis/kakao";

import { useGetUserInfo } from "@/hooks/useGetUserInfo";
import { removeCookie } from "@/utils/cookie";
import Description from "@/components/Home/Description";

const Home = () => {
  const { userInfo } = useGetUserInfo();

  const clickLogout = async () => {
    if (userInfo) {
      const res = await userLogout(userInfo?.id);
      if (res.status === 200) {
        removeCookie("WECA_access_token");
      }
    }
  };

  return (
    <div>
      <MainSwiper />
      <Description />
      <S.Logo src="/logo.png" alt="logo" onClick={clickLogout} />
      <iframe src="https://disearch.vercel.app"></iframe>
    </div>
  );
};

export default Home;
