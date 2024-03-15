import { useRef } from "react";
import * as S from "./style";
import { IoMdClose, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { useRecoilState } from "recoil";
import { invitationPhotosState } from "@/stores/createInvitationPhotosStore";
import { MAX_IMAGE_SIZE, MAX_UPLOAD_IMAGE_NUMBER } from "@/utils/InitialData";

const SlidePhotos = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [invitationPhotos, setInvitationPhotos] = useRecoilState(invitationPhotosState);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const filesArray = Array.from(e.dataTransfer.files);
    const imageFiles = filesArray.filter(file => !file.type.match(/image.*/));

    if (imageFiles.length > 0) {
      alert("이미지 파일만 업로드 할 수 있습니다.");
      return;
    } else if (filesArray.some(image => image.size > MAX_IMAGE_SIZE)) {
      alert(`사진첨부 사이즈는 ${MAX_IMAGE_SIZE / 1024 / 1024}MB 이내로 가능합니다.`);
      return;
    } else if (invitationPhotos.slide_photos.length + filesArray.length > MAX_UPLOAD_IMAGE_NUMBER) {
      alert(`갤러리 사진은 최대 ${MAX_UPLOAD_IMAGE_NUMBER}장까지만 업로드 가능합니다`);
      return;
    }

    const newImages = filesArray.map((file, index) => ({
      file,
      index: invitationPhotos.slide_photos.length + index,
    }));
    setInvitationPhotos(previousImages => ({
      ...previousImages,
      slide_photos: [...previousImages.slide_photos, ...newImages],
    }));
  };

  const handleDropOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleClickUploadImage = () => {
    inputRef.current?.click();
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      if (filesArray.some(image => image.size > MAX_IMAGE_SIZE)) {
        alert("사진첨부 사이즈는 3MB 이내로 가능합니다.");
        return;
      } else if (invitationPhotos.slide_photos.length + filesArray.length > MAX_UPLOAD_IMAGE_NUMBER) {
        alert(`갤러리 사진은 최대 ${MAX_UPLOAD_IMAGE_NUMBER}장까지만 업로드 가능합니다`);
        return;
      } else {
        const newImages = Array.from(e.target.files).map((file, index) => ({
          file,
          index: invitationPhotos.slide_photos.length + index,
        }));
        setInvitationPhotos(previousImages => ({
          ...previousImages,
          slide_photos: [...previousImages.slide_photos, ...newImages],
        }));
      }
    }
  };

  const handleRemoveImage = (removeIndex: number) => {
    if (confirm("사진을 삭제하시겠습니까?")) {
      setInvitationPhotos(previousImages => ({
        ...previousImages,
        slide_photos: previousImages.slide_photos
          .filter((_, index) => index !== removeIndex)
          .map((image, index) => ({ ...image, index })),
      }));
    }
  };

  const handleMoveForward = (index: number) => {
    setInvitationPhotos(previousImages => {
      const newImages = [...previousImages.slide_photos];
      if (index < newImages.length - 1) {
        const temp = { ...newImages[index], index: index + 1 };
        newImages[index] = { ...newImages[index + 1], index: index };
        newImages[index + 1] = temp;
      }
      return {
        ...previousImages,
        slide_photos: newImages,
      };
    });
  };
  const handleMoveBack = (index: number) => {
    setInvitationPhotos(previousImages => {
      const newImages = [...previousImages.slide_photos];
      if (index > 0) {
        const temp = { ...newImages[index], index: index - 1 };
        newImages[index] = { ...newImages[index - 1], index: index };
        newImages[index - 1] = temp;
      }
      return {
        ...previousImages,
        slide_photos: newImages,
      };
    });
  };

  return (
    <S.Container>
      <h1>갤러리에 들어갈 사진을 업로드해주세요.</h1>
      <h3>사진은 최대 15장까지 업로드할 수 있습니다.</h3>
      <h3>업로드 후에 사진의 순서를 변경할 수 있습니다.</h3>
      <S.ImageContainer onDrop={handleDrop} onDragOver={handleDropOver} id="Container">
        {!invitationPhotos.slide_photos.length && (
          <div className="notice-Drag">
            <MdOutlineFileDownload size={100} />
            <p>드래그하여 업로드를 할 수도 있습니다!</p>
          </div>
        )}
        <div className="grid" onDragLeave={e => e.stopPropagation()}>
          {[...invitationPhotos.slide_photos]
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
