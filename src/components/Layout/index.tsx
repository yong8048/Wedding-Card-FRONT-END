import { Outlet } from "react-router-dom";
import * as S from "./style";
import NavigationBar from "../NavigationBar";
import ScrollTopPageMove from "../Common/ScrollTopPageMove";

const Layout = () => {
  return (
    <>
      <ScrollTopPageMove />
      <S.Main>
        <Outlet />
      </S.Main>
      <NavigationBar />
    </>
  );
};

export default Layout;
