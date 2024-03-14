import { IReqInvitationJSON } from "@/types/invitation";
import * as S from "./style";
import { useRef } from "react";

const LiveWedding = ({
  setCreateInvitationData,
}: {
  setCreateInvitationData: React.Dispatch<React.SetStateAction<IReqInvitationJSON>>;
}) => {
  const urlInputRef = useRef<HTMLInputElement>(null);
  const radioInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (radioInputRef.current) {
      radioInputRef.current.checked = e.target.value === "";
    }
    setCreateInvitationData(previousData => ({
      ...previousData,
      live_url: e.target.value,
    }));
  };

  const handleCheckNotUse = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (urlInputRef.current && e.target.checked) {
      urlInputRef.current.value = "";

      setCreateInvitationData(previousData => ({
        ...previousData,
        live_url: "",
      }));
    }
  };

  return (
    <S.Container>
      <h1>라이브 웨딩 링크를 입력해주세요.</h1>
      <S.Wrapper>
        <div className="radio-container">
          <label>
            <input type="radio" onChange={handleCheckNotUse} ref={radioInputRef} defaultChecked={true} />
            <span>해당 없음</span>
          </label>
        </div>
        <div className="input-container">
          <span>라이브 URL</span>
          <input placeholder="URL을 입력해주세요." onChange={handleChange} ref={urlInputRef} />
        </div>
      </S.Wrapper>
    </S.Container>
  );
};

export default LiveWedding;
