import { atom } from "recoil";
import { IReqInvitationPhotos } from "@/types/invitation";
import { InitialData_CreateInvitationPhotos } from "@/utils/InitialData";

export const invitationPhotosState = atom<IReqInvitationPhotos>({
  key: "invitationPhotosState",
  default: InitialData_CreateInvitationPhotos,
});
