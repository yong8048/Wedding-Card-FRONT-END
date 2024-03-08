import { IReqCreateInvitation } from "@/types/invitation";
import * as S from "./style";
// import { postTemporaryData } from "@/apis/server";

const TempSaveButton = ({
  temporaryData,
  galleryImages,
}: {
  temporaryData: IReqCreateInvitation;
  galleryImages: { file: File; index: number }[];
}) => {
  const handleClickTempSave = async () => {
    console.log(temporaryData);
    console.log(galleryImages);
    // const res = await postTemporaryData(temporaryData);
    // console.log(res);
  };
  return (
    <S.Container onClick={handleClickTempSave}>
      <span>임시저장</span>
    </S.Container>
  );
};

export default TempSaveButton;
