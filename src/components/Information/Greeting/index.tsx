import { IReqCreateInvitation } from "@/types/invitation";
import * as S from "./style";

const Greeting = ({
  setCreateInvitaionData,
}: {
  setCreateInvitaionData: React.Dispatch<React.SetStateAction<IReqCreateInvitation>>;
}) => {
  const handleDataChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCreateInvitaionData(previousData => ({ ...previousData, welcome: e.target.value }));
  };

  return (
    <S.Container>
      <h1>인사말을 작성해 주세요.</h1>
      <h3>작성한 내용을 토대로 제작됩니다.</h3>
      <h3>띄어쓰기나 줄바꿈에 유의해주세요.</h3>
      <div className="textarea">
        <S.TextEditor>
          <button>가</button>
        </S.TextEditor>
        <textarea placeholder="인사말 작성" onChange={handleDataChange} />
      </div>
    </S.Container>
  );
};

export default Greeting;
