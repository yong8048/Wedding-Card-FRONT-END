import { IReqCreateInvitation } from "@/types/invitation";
import * as S from "./style";

const LiveWedding = ({
  setCreateInvitaionData,
}: {
  setCreateInvitaionData: React.Dispatch<React.SetStateAction<IReqCreateInvitation>>;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateInvitaionData(previousData => ({
      ...previousData,
      live_url: e.target.value,
    }));
  };
  return (
    <S.Container>
      <h1>라이브 웨딩 링크를 입력해주세요.</h1>
      <input onChange={handleChange} />
    </S.Container>
  );
};

export default LiveWedding;
