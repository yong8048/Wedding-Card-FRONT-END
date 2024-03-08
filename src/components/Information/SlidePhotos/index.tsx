import { useRef } from "react";
import * as S from "./style";
import { IoMdClose, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SlidePhotos = ({
  galleryImages,
  setGalleryImages,
}: {
  galleryImages: { file: File; index: number }[];
  setGalleryImages: React.Dispatch<
    React.SetStateAction<
      {
        file: File;
        index: number;
      }[]
    >
  >;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const filesArray = Array.from(e.dataTransfer.files);
    const imageFiles = filesArray.filter(file => !file.type.match(/image.*/));

    if (imageFiles.length > 0) {
      alert("이미지 파일만 업로드 할 수 있습니다.");
      return;
    } else if (e.dataTransfer.getData("text/plain") !== "") {
      return;
    }
    const newImages = Array.from(e.dataTransfer.files).map((file, index) => ({
      file,
      index: galleryImages.length + index,
    }));
    setGalleryImages(previousImages => [...previousImages, ...newImages]);
  };

  const handleDropOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleClickUploadImage = () => {
    inputRef.current?.click();
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map((file, index) => ({
        file,
        index: galleryImages.length + index,
      }));
      setGalleryImages(previousImages => [...previousImages, ...newImages]);
    }
  };

  const handleRemoveImage = (removeIndex: number) => {
    if (confirm("사진을 삭제하시게습니까?")) {
      setGalleryImages(previousImages =>
        previousImages.filter((_, index) => index !== removeIndex).map((image, index) => ({ ...image, index })),
      );
    }
  };

  const handleMoveForward = (index: number) => {
    setGalleryImages(previousImages => {
      const newImages = [...previousImages];
      if (index < newImages.length - 1) {
        newImages[index].index = index + 1;
        newImages[index + 1].index = index;
      }
      return newImages;
    });
  };
  const handleMoveBack = (index: number) => {
    setGalleryImages(previousImages => {
      const newImages = [...previousImages];
      if (index > 0) {
        newImages[index].index = index - 1;
        newImages[index - 1].index = index;
      }
      return newImages;
    });
  };

  return (
    <S.Container>
      <h1>갤러리에 들어갈 사진을 업로드해주세요.</h1>
      <h3>사진은 최대 15장까지 업로드할 수 있습니다.</h3>
      <h3>업로드 후에 사진의 순서를 변경할 수 있습니다.</h3>
      <S.ImageContainer onDrop={handleDrop} onDragOver={handleDropOver} id="Container">
        <div className="grid" onDragLeave={e => e.stopPropagation()}>
          {galleryImages
            .sort((a, b) => a.index - b.index)
            .map((image, index) => (
              <div key={index} className="image-Conatiner">
                <img src={URL.createObjectURL(image.file)} />
                <IoMdClose id="Close" onClick={() => handleRemoveImage(index)} />
                <IoIosArrowForward id="Forward" onClick={() => handleMoveForward(image.index)} />
                <IoIosArrowBack id="Back" onClick={() => handleMoveBack(image.index)} />
              </div>
            ))}
        </div>
      </S.ImageContainer>
      <input hidden type="file" multiple accept="image/*" ref={inputRef} onChange={handleChangeImage} />
      <S.UploadButton onClick={handleClickUploadImage}>사진 업로드</S.UploadButton>
    </S.Container>
  );
};

export default SlidePhotos;
