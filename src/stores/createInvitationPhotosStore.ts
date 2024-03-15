import { atom } from "recoil";
import { IReqInvitationPhotos } from "@/types/invitation";
import { InitialData_CreateInvitationPhotos } from "@/utils/InitialData";

export const invitationPhotosState = atom<IReqInvitationPhotos>({
  key: "invitationPhotosState", // 고유한 키
  default: InitialData_CreateInvitationPhotos, // 초기 상태 값
});
