import { useRef } from "react";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { invitationPhotosState } from "@/stores/createInvitationPhotosStore";
import { MAX_IMAGE_SIZE } from "@/utils/InitialData";

const MainPhoto = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [invitationPhotos, setInvitationPhotos] = useRecoilState(invitationPhotosState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  const handleSetImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? undefined;
    if (file && file.size < MAX_IMAGE_SIZE) {
      setInvitationPhotos(previousData => ({
        ...previousData,
        main_photo: file,
      }));
    } else {
      alert(`사진첨부 사이즈는 ${MAX_IMAGE_SIZE / 1024 / 1024}MB 이내로 가능합니다.`);
    }
  };
  return (
    <S.Container>
      <h1>메인 사진을 선택해 주세요.</h1>
      <h3>청첩장의 메인 이미지입니다.</h3>
      <h3>* 2번설명 2번설명 2번설명 2번설명 2번설명</h3>
      <S.ImageForm onSubmit={handleSubmit}>
        <div className="img-container">
          {invitationPhotos.main_photo && (
            <img src={URL.createObjectURL(invitationPhotos.main_photo)} alt="MainPhoto" />
          )}
          {!invitationPhotos.main_photo && <span>이미지를 업로드 해주세요.</span>}
        </div>
        <input type="file" ref={inputRef} onChange={handleSetImage} accept="image/*" />
        <button>사진 업로드</button>
      </S.ImageForm>
    </S.Container>
  );
};

export default MainPhoto;
