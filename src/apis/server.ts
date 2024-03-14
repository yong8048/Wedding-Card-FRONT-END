import { IReqCreateInvitation } from "@/types/invitation";
import { instance } from "./axios";
import { getUserInfo } from "./kakao";

export const postData = async ({
  JsonData,
  MainImage,
  GalleryImages,
  isTemp,
}: {
  JsonData: IReqCreateInvitation;
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

  const res = await instance.post(`/save/${isTemp ? "information" : "temp"}`, formData, { headers: { uid: uid.id } });
  return res;
};
