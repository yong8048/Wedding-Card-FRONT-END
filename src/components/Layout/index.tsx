import { Outlet } from "react-router-dom";
import * as S from "./style";

const Layout = () => {
  return (
    <>
      <S.Main>
        <Outlet />
      </S.Main>
    </>
  );
};

export default Layout;
