import { IReqCreateInvitation } from "@/types/invitation";
import * as S from "./style";

const TempSaveButton = ({ temporaryData }: { temporaryData: IReqCreateInvitation }) => {
  return (
    <S.Container onClick={() => console.log(temporaryData)}>
      <span>임시저장</span>
    </S.Container>
  );
};

export default TempSaveButton;
