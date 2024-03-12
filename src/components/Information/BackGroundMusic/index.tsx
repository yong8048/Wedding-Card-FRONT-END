import { IReqCreateInvitation } from "@/types/invitation";
import * as S from "./style";

const BackGroundMusic = ({
  setCreateInvitaionData,
}: {
  setCreateInvitaionData: React.Dispatch<React.SetStateAction<IReqCreateInvitation>>;
}) => {
  return (
    <S.Container>
      <h1>모바일 청접장의 BGM을 선택해주세요.</h1>
    </S.Container>
  );
};

export default BackGroundMusic;
