import { IReqInvitationJSON } from "@/types/invitation";
import * as S from "./style";
import { useRef, useState } from "react";
import YouTube from "react-youtube";

const YoutubeVideo = ({
  setCreateInvitationData: setCreateInvitaionData,
}: {
  setCreateInvitationData: React.Dispatch<React.SetStateAction<IReqInvitationJSON>>;
}) => {
  const [youtubeURL, setYoutubeURL] = useState("");
  const urlInputRef = useRef<HTMLInputElement>(null);
  const radioInputRef = useRef<HTMLInputElement>(null);

  const handleClickRegist = () => {
    if (urlInputRef.current) {
      const value = urlInputRef.current.value;
      const watch = value.substring(value.indexOf("watch?v="));
      const videoID = watch.substring(watch.indexOf("=") + 1);
      setYoutubeURL(videoID);
      setCreateInvitaionData(previousData => ({
        ...previousData,
        video_id: videoID,
      }));
    }
  };

  const handleChangeURL = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (radioInputRef.current) {
      if (!e.target.value) {
        radioInputRef.current?.click();
        radioInputRef.current.value = "";
      } else {
        radioInputRef.current.checked = false;
      }
    }
  };

  const handleCheckNotUse = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (urlInputRef.current && e.target.checked) {
      setYoutubeURL("");
      urlInputRef.current.value = "";
    }
  };

  return (
    <S.Container>
      <h1>청첩장에 첨부할 동영상 링크를 입력해주세요.</h1>
      <h3>유튜브에 업로드한 영상의 URL을 입력하세요.</h3>
      <h3>청첩장에서 재생할 수 있도록 '퍼가기 허용'을 설정하세요.</h3>
      <S.Wrapper>
        <div className="radio-container">
          <label>
            <input type="radio" onChange={handleCheckNotUse} ref={radioInputRef} defaultChecked={true} />
            <span>해당 없음</span>
          </label>
        </div>
        <div className="input-container">
          <span>유튜브 URL</span>
          <input placeholder="URL을 입력해주세요." ref={urlInputRef} onChange={handleChangeURL} />
          <button onClick={handleClickRegist}>등록</button>
        </div>
      </S.Wrapper>
      {youtubeURL && (
        <YouTube
          videoId={youtubeURL}
          className="youtube-container"
          opts={{
            width: "100%",
            height: "300px",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      )}
    </S.Container>
  );
};

export default YoutubeVideo;
