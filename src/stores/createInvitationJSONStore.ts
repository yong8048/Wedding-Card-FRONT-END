import { atom } from "recoil";
import { IReqInvitationJSON } from "@/types/invitation";
import { InitialData_CreateInvitationJSON } from "@/utils/InitialData";

export const invitationJSONState = atom<IReqInvitationJSON>({
  key: "invitationJSONState", // 고유한 키
  default: InitialData_CreateInvitationJSON, // 초기 상태 값
});
