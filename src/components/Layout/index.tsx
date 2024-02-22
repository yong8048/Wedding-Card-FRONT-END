import { Outlet } from "react-router-dom";
import * as S from "./style";
import NavigationBar from "../NavigationBar";

const Layout = () => {
  return (
    <>
      <S.Main>
        <Outlet />
      </S.Main>
      <NavigationBar />
    </>
  );
};

export default Layout;
