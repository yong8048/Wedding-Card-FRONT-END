import { userLogout } from "@/apis/kakao";
import * as S from "./style";
import { useGetUserInfo } from "@/hooks/useGetUserInfo";
import { removeCookie } from "@/utils/cookie";

const Home = () => {
  const { userInfo } = useGetUserInfo();

  const clickLogout = async () => {
    if (userInfo) {
      const res = await userLogout(userInfo?.id);
      console.log(res);
      if (res.status === 200) {
        removeCookie("WECA_access_token");
      }
    }
  };
  return (
    <div>
      <S.Logo src="/logo.png" alt="logo" onClick={clickLogout} />
    </div>
  );
};

export default Home;
