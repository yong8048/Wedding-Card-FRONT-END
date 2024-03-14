import { useRef } from "react";
import * as S from "./style";

const MainPhoto = ({
  mainImage,
  setMainImage,
}: {
  mainImage: File | undefined;
  setMainImage: React.Dispatch<React.SetStateAction<File | undefined>>;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  const handleSetImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setMainImage(e.target.files[0]);
    }
  };
  return (
    <S.Container>
      <h1>메인 사진을 선택해 주세요.</h1>
      <h3>* 1번설명 1번설명 1번설명</h3>
      <h3>* 2번설명 2번설명 2번설명 2번설명 2번설명</h3>
      <S.ImageForm onSubmit={handleSubmit}>
        <div className="img-container">
          {mainImage && <img src={URL.createObjectURL(mainImage)} alt="MainPhoto" />}
          {!mainImage && <span>이미지를 업로드 해주세요.</span>}
        </div>
        <input type="file" ref={inputRef} onChange={handleSetImage} />
        <button>사진 업로드</button>
      </S.ImageForm>
    </S.Container>
  );
};

export default MainPhoto;
