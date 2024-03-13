import { IReqCreateInvitation } from "@/types/invitation";
import * as S from "./style";
import { useRef, useState } from "react";
import YouTube from "react-youtube";

const YoutubeVideo = ({
  setCreateInvitaionData,
}: {
  setCreateInvitaionData: React.Dispatch<React.SetStateAction<IReqCreateInvitation>>;
}) => {
  const [youtubeURL, setYoutubeURL] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickRegist = () => {
    if (inputRef.current) {
      setYoutubeURL(inputRef.current.value);
    }
  };

  return (
    <S.Container>
      <h1>웨딩 동영상</h1>
      <h3>유튜브에 업로드한 영상의 URL을 입력하세요.</h3>
      <h3>청첩장에서 재생할 수 있도록 '퍼가기 허용'을 설정하세요.</h3>
      <S.Wrapper>
        <div className="radio-container">
          <label>
            <input type="radio" />
            <span>사용 안함</span>
          </label>
        </div>
        <div className="input-container">
          <span>유튜브 URL</span>
          <input placeholder="URL을 입력해주세요." ref={inputRef} />
          <button onClick={handleClickRegist}>등록</button>
        </div>
      </S.Wrapper>
      <YouTube
        videoId="giQJiXhNRdQ"
        className="youtube-container"
        opts={{
          width: "100%",
          height: "300px",
          playerVars: {
            autoplay: 1,
          },
        }}
      />
    </S.Container>
  );
};

export default YoutubeVideo;
