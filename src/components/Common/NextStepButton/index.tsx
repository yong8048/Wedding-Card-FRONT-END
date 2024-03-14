import * as S from "./style";
import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5";

const NextStepButton = ({ ArrowDirection, FuncOnClick }: { ArrowDirection: string; FuncOnClick: () => void }) => {
  return (
    <S.Container>
      <S.Wrapper onClick={FuncOnClick} $ArrowDirection={ArrowDirection === "left"}>
        {ArrowDirection === "left" ? (
          <IoArrowBackOutline size={30} color="#ececec" />
        ) : (
          <IoArrowForwardOutline size={30} color="#ececec" />
        )}
      </S.Wrapper>
    </S.Container>
  );
};

export default NextStepButton;
