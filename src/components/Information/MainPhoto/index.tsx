import { useRef } from "react";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { invitationPhotosState } from "@/stores/createInvitationPhotosStore";
import { MAX_IMAGE_SIZE } from "@/utils/InitialData";
import Resizer from "react-image-file-resizer";
import { invitationJSONState } from "@/stores/createInvitationJSONStore";
import { Effects } from "@/constants/ContentsData";

const MainPhoto = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [invitationPhotos, setInvitationPhotos] = useRecoilState(invitationPhotosState);
  const [invitationJSON, setInvitationJSON] = useRecoilState(invitationJSONState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  const resizeFile = (file: File) =>
    new Promise(res => {
      Resizer.imageFileResizer(file, 1500, 1500, "JPEG", 50, 0, uri => res(uri), "file");
    });

  const handleSetImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? undefined;

    if (file) {
      if (file.size > MAX_IMAGE_SIZE) {
        alert(`사진첨부 사이즈는 ${MAX_IMAGE_SIZE / 1024 / 1024}MB 이내로 가능합니다.`);
      } else if (!file.type.match(/image.*/)) {
        alert("이미지 파일만 업로드 할 수 있습니다.");
      } else {
        const resizedImage = (await resizeFile(file)) as File;
        setInvitationPhotos(previousData => ({
          ...previousData,
          main_photo: resizedImage,
        }));
      }
    }
  };

  const handleChangeEffect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvitationJSON(previousData => ({
      ...previousData,
      contents: {
        ...previousData.contents,
        effect: Number(e.target.id),
      },
    }));
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
          {invitationJSON.contents.effect !== 0 && (
            <div className="background-video">
              <video key={Effects[invitationJSON.contents.effect - 1]} muted autoPlay loop>
                <source src={Effects[invitationJSON.contents.effect - 1]} type="video/mp4" />
              </video>
            </div>
          )}
        </div>
        <input type="file" ref={inputRef} onChange={handleSetImage} accept="image/*" />
        <button>사진 업로드</button>
      </S.ImageForm>
      <h1>사진에 어울리는 이펙트를 선택해주세요.</h1>
      <h3>이펙트를 선택하시면 위의 사진에 미리보기가 적용됩니다.</h3>
      <S.EffectForm>
        <label>
          <input type="radio" name="effect" id="0" defaultChecked={true} onChange={handleChangeEffect} />
          <span>사용 안함</span>
        </label>
        <label>
          <input type="radio" name="effect" id="1" onChange={handleChangeEffect} />
          <span>벚꽃잎</span>
        </label>
        <label>
          <input type="radio" name="effect" id="2" onChange={handleChangeEffect} />
          <span>눈송이</span>
        </label>
      </S.EffectForm>
    </S.Container>
  );
};

export default MainPhoto;
