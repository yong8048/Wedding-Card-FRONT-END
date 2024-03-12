import { IReqCreateInvitation } from "@/types/invitation";
import * as S from "./style";

const BackGroundMusic = ({
  setCreateInvitaionData,
}: {
  setCreateInvitaionData: React.Dispatch<React.SetStateAction<IReqCreateInvitation>>;
}) => {
  const handleChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const bgmNumber = Number(e.target.id);
    setCreateInvitaionData(previousData => ({
      ...previousData,
      bgm: bgmNumber,
    }));
  };

  return (
    <S.Container>
      <h1>모바일 청접장의 BGM을 선택해주세요.</h1>
      <S.Wrapper>
        {[1, 2, 3, 0].map(item => (
          <div className="audio-container" key={item}>
            <label>
              <input type="radio" id={item.toString()} name="bgm" onChange={handleChangeRadio} />
              <span>{item === 0 ? "사용 안함" : `${item}번 음악`}</span>
            </label>
            {item !== 0 && <audio controls />}
          </div>
        ))}
      </S.Wrapper>
    </S.Container>
  );
};

export default BackGroundMusic;
