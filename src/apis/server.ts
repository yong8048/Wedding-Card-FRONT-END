import { IReqInvitationJSON } from "@/types/invitation";
import { formInstance, instance } from "./axios";
import { getUserInfo } from "./kakao";

export const postData = async ({
  JsonData,
  MainImage,
  GalleryImages,
  isTemp,
}: {
  JsonData: IReqInvitationJSON;
  MainImage: File | undefined;
  GalleryImages: { file: File; index: number }[];
  isTemp: boolean;
}) => {
  const formData = new FormData();

  if (MainImage) {
    formData.append("mainImage", MainImage);
  }

  if (GalleryImages) {
    GalleryImages.forEach(image => {
      formData.append(`images${image.index + 1}`, image.file);
    });
  }

  formData.append("json", new Blob([JSON.stringify(JsonData)], { type: "application/json" }));
  const uid = await getUserInfo();
  console.log(uid);

  const res = await formInstance.post(`/save/${isTemp ? "temp" : "information"}`, formData, {
    headers: { uid: uid.id },
  });
  return res;
};

export const testData = async ({ JsonData }: { JsonData: IReqInvitationJSON }) => {
  const res = await instance.post("/test", JsonData);
  return res;
};
