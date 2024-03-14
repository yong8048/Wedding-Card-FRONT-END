import * as S from "./style";

const TempSaveButton = ({ FuncOnClick }: { FuncOnClick: () => void }) => {
  return (
    <S.Container onClick={FuncOnClick}>
      <span>임시저장</span>
    </S.Container>
  );
};

export default TempSaveButton;
