import { IReqInvitationJSON } from "@/types/invitation";
import * as S from "./style";
import { useEffect, useRef } from "react";

const Audios = {
  Angel: { index: 1, src: "/BGM/Angel.mp3" },
  Forget: { index: 2, src: "/BGM/Forget.mp3" },
  Hopeful: { index: 3, src: "/BGM/Hopeful.mp3" },
};

const BackGroundMusic = ({
  setCreateInvitationData,
}: {
  setCreateInvitationData: React.Dispatch<React.SetStateAction<IReqInvitationJSON>>;
}) => {
  const audioRefs = useRef<HTMLAudioElement[]>([]);

  useEffect(() => {
    audioRefs.current.map(audio => (audio.volume = 0.5));

    const handlePlay = (index: number) => {
      audioRefs.current.forEach((audioRef, audioIndex) => {
        if (audioIndex !== index) {
          audioRef.pause();
        }
      });
    };

    audioRefs.current.forEach((audioRef, index) => {
      audioRef.addEventListener("play", () => handlePlay(index));
    });

    return () => {
      audioRefs.current.forEach((audioRef, index) => {
        audioRef.removeEventListener("play", () => handlePlay(index));
      });
    };
  }, []);

  const handleChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const bgmNumber = Number(e.target.id);
    setCreateInvitationData(previousData => ({
      ...previousData,
      contents: {
        ...previousData.contents,
        bgm: bgmNumber,
      },
    }));
  };

  return (
    <S.Container>
      <h1>모바일 청접장의 BGM을 선택해주세요.</h1>
      <S.Wrapper>
        <label>
          <input type="radio" name="bgm" id="0" onChange={handleChangeRadio} defaultChecked={true} />
          <span>사용 안함</span>
        </label>
        {Object.entries(Audios).map(([key, value], index) => (
          <div className="audio-container" key={key}>
            <label>
              <input type="radio" id={value.index.toString()} name="bgm" onChange={handleChangeRadio} />
              <span>{value.index}번 음악</span>
            </label>
            <audio
              controls
              src={value.src}
              ref={el => {
                if (el) audioRefs.current[index] = el;
              }}
              controlsList="noplaybackrate nodownload"
            />
          </div>
        ))}
      </S.Wrapper>
    </S.Container>
  );
};

export default BackGroundMusic;
